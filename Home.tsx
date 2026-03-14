import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, TrendingUp, Users, Database, CheckCircle2, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Data Analytics Dashboard"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 border border-blue-500/30">
                Empowering Sales Teams
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Transform Sales Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Revenue</span> with Analytics, CRM & Automation.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Dole's Sales Analytics Academy helps businesses and professionals master data-driven sales strategies using modern tools such as Excel, Power BI, CRM systems, and AI-powered productivity tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/corporate-training"
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/30"
                >
                  Book Corporate Training
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  Explore Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data-Driven Growth</h3>
              <p className="text-slate-600">Learn to identify trends and opportunities that drive revenue growth.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="mx-auto w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Modern Tooling</h3>
              <p className="text-slate-600">Master Power BI, Salesforce, and Advanced Excel for business intelligence.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="mx-auto w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI & Automation</h3>
              <p className="text-slate-600">Leverage AI tools to automate reporting and boost sales productivity.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Programs Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Master the Tools of Modern Sales</h2>
            <p className="text-lg text-slate-600">
              Comprehensive training programs designed to bridge the gap between traditional sales operations and modern data analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Power BI for Sales', desc: 'Build interactive dashboards and transform sales data into actionable insights.', icon: BarChart3, color: 'text-yellow-600', bg: 'bg-yellow-100' },
              { title: 'Advanced Excel', desc: 'Learn advanced reporting techniques, automation, and business analysis.', icon: Database, color: 'text-green-600', bg: 'bg-green-100' },
              { title: 'Salesforce CRM', desc: 'Manage leads, track sales pipelines, and automate CRM workflows effectively.', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
            ].map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className={`w-14 h-14 ${course.bg} ${course.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <course.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-6">{course.desc}</p>
                <Link to="/courses" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/courses" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Training CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Entire Sales Team</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                We offer customized corporate training programs for manufacturing companies, SaaS startups, recruitment agencies, and more. Improve your team's sales reporting, CRM adoption, and analytics capabilities.
              </p>
              <ul className="space-y-4 mb-8">
                {['Customized curriculum for your industry', 'Hands-on workshops with your actual data', 'Post-training support and consultation'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-300 shrink-0" />
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/corporate-training"
                className="inline-flex justify-center items-center bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                Book Corporate Training
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square max-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                  alt="Corporate Training Session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
