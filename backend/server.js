const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Paths
const DATA_FILE = path.join(__dirname, 'data.json');
const GALLERY_DIR = path.join(__dirname, '../public/gallery');

// Ensure gallery directory exists
if (!fs.existsSync(GALLERY_DIR)) {
  fs.mkdirSync(GALLERY_DIR, { recursive: true });
}

// Multer Setup for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, GALLERY_DIR);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// --- API ENDPOINTS ---

// GET Inquiries
app.get('/api/inquiries', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Failed to read inquiries' });
  }
});

// POST Inquiry (from Contact Form)
app.post('/api/inquiries', (req, res) => {
  try {
    const newInquiry = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...req.body
    };

    let inquiries = [];
    if (fs.existsSync(DATA_FILE)) {
      inquiries = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
    
    inquiries.push(newInquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));
    
    res.status(201).json({ message: 'Inquiry saved successfully', inquiry: newInquiry });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save inquiry' });
  }
});

// GET Gallery Images
app.get('/api/gallery', (req, res) => {
  try {
    const files = fs.readdirSync(GALLERY_DIR);
    // Return relative paths that the Vite dev server can serve
    const imageUrls = files.map(file => `/gallery/${file}`);
    res.json(imageUrls);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load gallery' });
  }
});

// POST Gallery Image (Admin Upload)
app.post('/api/gallery', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image provided' });
    }
    res.status(201).json({ 
      message: 'Image uploaded successfully', 
      url: `/gallery/${req.file.filename}` 
    });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

// DELETE Gallery Image
app.delete('/api/gallery/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    // Prevent directory traversal
    if (filename.includes('..') || filename.includes('/')) {
      return res.status(400).json({ error: 'Invalid filename' });
    }
    
    const filePath = path.join(GALLERY_DIR, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.status(200).json({ message: 'Image deleted successfully' });
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Admin Backend Server running on http://localhost:${PORT}`);
});
