import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Settings, Users2, LineChart, Briefcase, ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Manufacturing Companies', icon: Building2 },
  { name: 'SaaS Startups', icon: Settings },
  { name: 'Recruitment Agencies', icon: Users2 },
  { name: 'Real Estate Companies', icon: LineChart },
  { name: 'Export Businesses', icon: Briefcase },
];

export default function CorporateTraining() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Training"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-6 border border-blue-500/30">
              For Organizations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Customized Corporate Training</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Empower your entire sales force with customized workshops designed to improve sales reporting, CRM adoption, and analytics capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Invest in Corporate Analytics Training?</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  In today's competitive landscape, raw sales talent is no longer enough. Organizations that leverage data effectively outperform their peers by a significant margin.
                </p>
                <p>
                  Our corporate training programs are not generic lectures. We design <strong>customized workshops</strong> tailored to your specific industry, utilizing your actual data structures (where appropriate) to ensure immediate, practical application.
                </p>
                <p>
                  Whether your team struggles with CRM adoption, manual Excel reporting, or lacks visibility into pipeline health, we build a curriculum that solves your specific operational bottlenecks.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">3x</h3>
                    <p className="text-sm font-medium text-slate-700">Faster Reporting Cycles</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-2xl">
                    <h3 className="text-4xl font-bold text-emerald-600 mb-2">100%</h3>
                    <p className="text-sm font-medium text-slate-700">CRM Adoption Rate</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-indigo-50 p-6 rounded-2xl">
                    <h3 className="text-4xl font-bold text-indigo-600 mb-2">40%</h3>
                    <p className="text-sm font-medium text-slate-700">Increase in Forecast Accuracy</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <h3 className="text-4xl font-bold text-purple-600 mb-2">ROI</h3>
                    <p className="text-sm font-medium text-slate-700">Measurable Business Impact</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">
              We have specialized experience designing analytics and CRM workflows for complex B2B sales environments across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 mx-auto bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <industry.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your Sales Operations?</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Book a consultation to discuss your team's specific challenges. We'll design a customized training roadmap that aligns with your business objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
          >
            Book Corporate Training
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
