import React from 'react';
import AnimatedText from '../components/AnimatedText';
import SEO from '../components/SEO';

const teamMembers = {
  ceo: { name: 'Jay', role: 'CEO & Founder', creds: 'CPC., CCS , LSSBB', img: '/team/Jayaprathap (AKA) Jay.png' },
  heads: [
    { name: 'Senthil Kumar (AKA) Sento', role: 'Head RCM services & Dental Billing', img: '/team/Senthil.png' },
    { name: 'Ananthakumar', role: 'Head - Admin', img: '/team/Ananthakumar.png' }
  ],
  leads: [
    { name: 'Radhika Manokaran', role: 'Manager - Medical Coding', img: '/team/Radhika.png' },
    { name: 'Sofia John', role: 'Human Resources (HR)', img: '/team/Sofia.png' },
    { name: 'Arul.Saleth', role: 'IT Manager', img: '/team/Arul.Saleth.png' },
    { name: 'Mahendran', role: 'Lead Medical Records Sorting Services', img: '/team/mahendran.png' }
  ]
};

export default function Team() {
  const allMembers = [teamMembers.ceo, ...teamMembers.heads, ...teamMembers.leads];
  const teamSchema = allMembers.map(member => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "worksFor": {
      "@type": "Organization",
      "name": "New Way Healthcare Services"
    }
  }));

  return (
    <div className="pt-32 pb-24 bg-gray-900 min-h-screen relative overflow-hidden">
      <SEO 
        title="Our Leadership Team" 
        description="Meet the experts driving operational excellence at New Way Healthcare Services."
        schema={teamSchema}
      />
      
      {/* Background Graphic to mimic the flyer */}
      <div className="absolute top-1/3 left-0 right-0 bottom-0 bg-[#8cc63f] transform -skew-y-3 origin-top-left z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        
        {/* Header Title */}
        <div className="mb-20 pt-10">
          <h2 className="text-3xl font-black text-gray-300 uppercase tracking-widest mb-2">Our New Way</h2>
          <h1 className="text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter drop-shadow-lg">Team</h1>
        </div>

        {/* Pyramid Layout */}
        <div className="flex flex-col items-center space-y-16">
          
          {/* Level 1: CEO */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center group w-64">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-4 bg-white group-hover:scale-105 transition-transform duration-300">
                <img src={teamMembers.ceo.img} alt={teamMembers.ceo.name} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-black text-white">{teamMembers.ceo.name}</h3>
              <p className="text-sm font-semibold text-gray-300">{teamMembers.ceo.creds}</p>
              <p className="text-sm font-medium text-gray-400 mt-1">{teamMembers.ceo.role}</p>
            </div>
          </div>

          {/* Level 2: Heads */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-32 w-full max-w-4xl mx-auto">
            {teamMembers.heads.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center group w-56 text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 bg-white group-hover:scale-105 transition-transform duration-300">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{member.name}</h3>
                <p className="text-xs font-semibold text-gray-800 mt-2 leading-snug">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Level 3: Leads */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-6xl mx-auto pt-8">
            {teamMembers.leads.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center group w-48 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-white group-hover:scale-105 transition-transform duration-300">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{member.name}</h3>
                <p className="text-xs font-semibold text-gray-800 mt-2 leading-snug">{member.role}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
