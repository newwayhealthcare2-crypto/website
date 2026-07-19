import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Shield, 
  Users, 
  Clock, 
  Globe2, 
  LineChart, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import AnimatedText from '../AnimatedText';
import GlassCard from '../GlassCard';

const features = [
  { title: 'Six Sigma Quality', icon: Award },
  { title: 'HIPAA Compliance', icon: Shield },
  { title: 'Highly Skilled Coders', icon: Users },
  { title: 'Fast Turnaround', icon: Clock },
  { title: 'US & India Operations', icon: Globe2 },
  { title: 'Continuous Monitoring', icon: LineChart },
  { title: 'Revenue Growth', icon: TrendingUp },
  { title: 'Cost Reduction', icon: CheckCircle2 },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            <AnimatedText text="Why Partner With Us?" />
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver measurable business benefits through operational excellence, helping you scale efficiently and securely.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <GlassCard
                  className="flex flex-col items-center justify-center text-center h-48 group hover:border-gray-300 transition-all hover:-translate-y-1 cursor-pointer bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-900 group-hover:text-white transition-colors text-gray-700">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h4>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
