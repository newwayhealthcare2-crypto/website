import React from 'react';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('http://localhost:3001/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert('Thank you for your message. We will get back to you shortly.');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div className="pt-48 pb-24 bg-white">
      <SEO 
        title="Contact Us - Free Consultation" 
        description="Ready to optimize your revenue cycle? Reach out to our team of experts for a free consultation."
      />
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Let's Talk" />
        </h1>
        <p className="text-xl text-gray-600">
          Ready to optimize your revenue cycle? Reach out to our team of experts for a free consultation.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left - Contact Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Corporate Office</h4>
                  <a href="https://maps.app.goo.gl/61nyCTAx8w6f4n3g7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors block">
                    Kosmo One Business Park<br />
                    Nolambur, Chennai
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">
                    +91 8667001566 (India)<br />
                    +1 307 463 4168 (US)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                  <a href="mailto:Jay@newwayhealthcare.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Jay@newwayhealthcare.com
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Image/Map Placeholder */}
            <a href="https://maps.app.goo.gl/61nyCTAx8w6f4n3g7" target="_blank" rel="noopener noreferrer" className="block">
              <GlassCard className="h-64 flex items-center justify-center relative overflow-hidden group bg-gray-100 border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-all">
                 <div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)' }} />
                 <span className="relative z-10 font-bold text-gray-900 shadow-white drop-shadow-md bg-white/90 px-6 py-3 rounded-xl border border-gray-200 group-hover:bg-gray-900 group-hover:text-white transition-colors">View on Google Maps</span>
              </GlassCard>
            </a>
          </div>

          {/* Right - Form */}
          <div>
            <GlassCard className="p-8 lg:p-12 bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input 
                      {...register("name", { required: true })} 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input 
                      {...register("company")} 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      placeholder="Your Healthcare Org"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input 
                      type="email"
                      {...register("email", { required: true })} 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input 
                      {...register("phone")} 
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    {...register("message", { required: true })} 
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Schedule Consultation
                </button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </div>
  );
}
