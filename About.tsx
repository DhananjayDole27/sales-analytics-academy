import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Team meeting"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About the Academy</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Bridging the gap between traditional sales operations and modern data analytics to empower professionals and organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To equip sales professionals and organizations with the analytical skills, modern tools, and data-driven strategies required to optimize performance, streamline operations, and accelerate revenue growth in a competitive business landscape.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the premier global training institution recognized for transforming traditional sales teams into agile, data-fluent powerhouses capable of making smarter business decisions through advanced analytics and automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-5/12 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src="/founder.jpg"
                  alt="Dhananjay Dole - Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white font-bold text-2xl">Dhananjay Dole</p>
                  <p className="text-blue-300 font-medium">Founder & Lead Instructor</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-7/12 w-full"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet the Founder</h2>
              
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="mb-6">
                  Dhananjay Dole is the Founder of Dole's Sales Analytics Academy with <strong>6.5+ years of professional industry experience</strong> in sales operations, business analytics, and data-driven reporting.
                </p>
                <p className="mb-6">
                  He specializes in helping sales teams and businesses improve performance through data analytics, CRM systems, automation, and modern business intelligence tools. Having worked extensively with enterprise data, he understands the critical disconnect between raw data collection and actionable sales strategy.
                </p>
                <p className="mb-8">
                  Through this academy, he aims to bridge the gap between traditional sales operations and modern data analytics, empowering professionals and organizations to make smarter business decisions using data.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl">6.5+ Years</h4>
                    <p className="text-sm text-slate-500">Industry Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl">Expert</h4>
                    <p className="text-sm text-slate-500">Analytics & CRM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
