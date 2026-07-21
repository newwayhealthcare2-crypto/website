import React, { useState, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';
import { Mail, Image as ImageIcon, Upload, Lock, LogOut, CheckCircle2, Trash2 } from 'lucide-react';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('inquiries');
  
  // Data States
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  
  // Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Simple hardcoded login for demo
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validUsers = [
      { email: 'flyggoagency@gmail.com', pass: 'Flyggo@8' },
      { email: 'Jay.pratap.madhavan@gmail.com', pass: 'Newway@2026' }
    ];

    const isValid = validUsers.some(user => user.email === email && user.pass === password);

    if (isValid) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert('Incorrect email or password');
    }
  };

  const fetchData = async () => {
    try {
      const [inqRes, galRes] = await Promise.all([
        fetch('http://localhost:3001/api/inquiries'),
        fetch('http://localhost:3001/api/gallery')
      ]);
      if (inqRes.ok) setInquiries(await inqRes.json());
      if (galRes.ok) setGalleryImages(await galRes.json());
    } catch (err) {
      console.error('Failed to fetch admin data', err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadSuccess(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const res = await fetch('http://localhost:3001/api/gallery', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        setUploadSuccess(true);
        setSelectedFile(null);
        fetchData(); // Refresh gallery
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      alert('Network error during upload');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (imageUrl: string) => {
    const filename = imageUrl.split('/').pop();
    if (!filename) return;
    
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        const res = await fetch(`http://localhost:3001/api/gallery/${filename}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          fetchData(); // Refresh gallery
        } else {
          alert('Failed to delete image');
        }
      } catch (err) {
        alert('Network error during deletion');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-48 pb-24 bg-gray-50 flex items-center justify-center">
        <SEO title="Admin Login" description="Secure admin access portal." />
        <GlassCard className="w-full max-w-md p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-500">Enter password to access dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all mb-4"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/30"
            >
              Secure Login
            </button>
          </form>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-24 bg-gray-50">
      <SEO title="Admin Dashboard" description="Manage inquiries and gallery." />
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center text-gray-500 hover:text-red-600 transition-colors font-medium"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'inquiries' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Mail className="w-5 h-5 mr-2" />
            Inquiries ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'gallery' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Gallery Manager
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'inquiries' && (
          <GlassCard className="p-0 overflow-hidden">
            {inquiries.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No inquiries yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="p-4 font-semibold text-gray-700">Date</th>
                      <th className="p-4 font-semibold text-gray-700">Name</th>
                      <th className="p-4 font-semibold text-gray-700">Email</th>
                      <th className="p-4 font-semibold text-gray-700">Subject</th>
                      <th className="p-4 font-semibold text-gray-700">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.slice().reverse().map((inq: any) => (
                      <tr key={inq.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                          {new Date(inq.date).toLocaleDateString()}
                        </td>
                        <td className="p-4 font-medium text-gray-900">{inq.name}</td>
                        <td className="p-4 text-blue-600">{inq.email}</td>
                        <td className="p-4 text-gray-700">{inq.subject}</td>
                        <td className="p-4 text-gray-600 max-w-xs truncate" title={inq.message}>{inq.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </GlassCard>
        )}

        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <GlassCard className="p-6 sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Upload className="w-6 h-6 mr-2 text-blue-600" />
                  Upload New Image
                </h3>
                
                <div className="space-y-4">
                  <label className="block w-full border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-600">
                      {selectedFile ? selectedFile.name : 'Click to browse images'}
                    </span>
                  </label>
                  
                  <button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploading ? 'Uploading...' : 'Upload Image'}
                  </button>

                  {uploadSuccess && (
                    <div className="flex items-center text-green-600 font-medium p-4 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Upload Successful!
                    </div>
                  )}
                </div>
              </GlassCard>
            </div>
            
            <div className="lg:col-span-2">
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Current Gallery</h3>
                {galleryImages.length === 0 ? (
                  <p className="text-gray-500 text-center py-12">No images in gallery yet.</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {galleryImages.map((src, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm relative group bg-gray-50">
                        <img src={src} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        
                        {/* Delete Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => handleDelete(src)}
                            className="bg-red-600 text-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-red-700"
                            title="Delete Image"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
