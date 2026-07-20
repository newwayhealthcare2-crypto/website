import React from 'react';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { Globe, Mail } from 'lucide-react';

const team = [
  { name: 'Jay', role: 'CEO & Founder', creds: 'CPC., CCS , LSSBB', img: '/team/Jayaprathap (AKA) Jay.png' },
  { name: 'Senthil Kumar (AKA) Sento', role: 'Head RCM services & Dental Billing', img: '/team/Senthil.png' },
  { name: 'Radhika Manokaran', role: 'Manager - Medical Coding', img: '/team/Radhika.png' },
  { name: 'Sofia John', role: 'Human Resources (HR)', img: '/team/Sofia.png' },
  { name: 'Arul.Saleth', role: 'IT Manager', img: '/team/Arul.Saleth.png' },
  { name: 'Ananthakumar', role: 'Head - Admin', img: '/team/Ananthakumar.png' },
  { name: 'Mahendran', role: 'Lead Medical Records Sorting Services', img: '/team/mahendran.png' },
];

export default function Team() {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Leadership & Infrastructure" />
        </h1>
        <p className="text-xl text-gray-600">
          Meet the experts driving operational excellence and explore our state-of-the-art global delivery centers.
        </p>
      </div>

      {/* Leadership Team */}
      <div className="container mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Executive Team</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-50 relative flex items-end justify-center px-4 pt-6">
                <img src={member.img} alt={member.name} className="w-full h-full object-contain object-bottom group-hover:scale-110 transition-transform duration-500 origin-bottom" />
              </div>
              <div className="p-3 md:p-6 text-center border-t border-gray-100 bg-white flex-1 flex flex-col justify-center">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
                {member.creds && <p className="text-[10px] md:text-xs font-bold text-gray-500 mb-1 md:mb-2">{member.creds}</p>}
                <p className="text-xs md:text-sm text-blue-600 font-semibold leading-tight">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
