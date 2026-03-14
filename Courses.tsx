import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileSpreadsheet, BarChart3, Linkedin, Zap } from 'lucide-react';

const SalesforceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.603 6.007c-1.54 0-2.887.89-3.565 2.18-.344-.12-.71-.18-1.09-.18-1.66 0-3.018 1.35-3.018 3.01 0 .21.02.41.066.61C1.725 12.01 0 14.07 0 16.51c0 2.84 2.31 5.15 5.15 5.15h11.96c3.8 0 6.89-3.09 6.89-6.89 0-3.41-2.48-6.25-5.74-6.8-.55-1.14-1.73-1.92-3.1-1.92-.61 0-1.19.16-1.69.44-.45-1.12-1.56-1.9-2.86-1.9h-.007zM5.15 20.32c-2.1 0-3.81-1.71-3.81-3.81 0-1.93 1.43-3.53 3.3-3.77l.56-.07-.12-.55c-.06-.27-.09-.55-.09-.83 0-1.04.85-1.89 1.89-1.89.37 0 .73.11 1.04.32l.48.33.26-.51c.5-.98 1.5-1.59 2.6-1.59 1.15 0 2.18.66 2.66 1.69l.23.49.53-.11c.36-.08.73-.12 1.1-.12 1.18 0 2.27.65 2.84 1.7l.27.5.54.12c2.6.58 4.5 2.87 4.5 5.58 0 3.16-2.57 5.73-5.73 5.73H5.15z"/>
  </svg>
);

const courses = [
  {
    id: 'excel',
    title: 'Excel & Advanced Excel for Business',
    icon: FileSpreadsheet,
    color: 'text-green-600',
    bg: 'bg-green-100',
    overview: 'Learn advanced reporting techniques, automation, and business analysis using Excel to streamline your daily sales operations.',
    outcomes: [
      'Master advanced formulas (VLOOKUP, INDEX/MATCH, XLOOKUP)',
      'Create dynamic PivotTables and PivotCharts',
      'Automate repetitive tasks with Macros and VBA basics',
      'Build interactive sales dashboards directly in Excel'
    ],
    audience: 'Sales analysts, operations managers, and professionals looking to upgrade their data manipulation skills.',
    benefits: 'Save hours of manual reporting time and uncover hidden trends in your sales data with precision.'
  },
  {
    id: 'powerbi',
    title: 'Power BI for Sales Dashboards',
    icon: BarChart3,
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
    overview: 'Build interactive dashboards and transform raw sales data into actionable, visual insights that drive strategic decisions.',
    outcomes: [
      'Connect to multiple data sources (Excel, SQL, CRM)',
      'Clean and transform data using Power Query',
      'Write DAX measures for complex sales calculations',
      'Design compelling, interactive visual reports'
    ],
    audience: 'Sales leaders, business intelligence analysts, and data-driven professionals.',
    benefits: 'Provide stakeholders with real-time visibility into pipeline health, revenue forecasts, and team performance.'
  },
  {
    id: 'salesforce',
    title: 'Salesforce CRM for Sales Teams',
    icon: SalesforceIcon,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    overview: 'Learn how to manage leads, track sales pipelines, and automate CRM workflows to maximize team efficiency and close rates.',
    outcomes: [
      'Navigate the Salesforce interface and manage core objects',
      'Track the complete lead-to-opportunity lifecycle',
      'Create custom reports and dashboards for pipeline visibility',
      'Set up automated workflows and email alerts'
    ],
    audience: 'Sales representatives, SDRs, BDRs, and sales managers adopting or optimizing Salesforce.',
    benefits: 'Ensure data hygiene, prevent lead leakage, and accelerate the sales cycle through structured CRM usage.'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Sales Navigator for B2B Lead Generation',
    icon: Linkedin,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
    overview: 'Discover advanced strategies to identify high-quality business leads, engage decision-makers, and build strong pipelines.',
    outcomes: [
      'Optimize your professional profile for social selling',
      'Use advanced search filters to find ideal customer profiles (ICPs)',
      'Save leads, accounts, and set up custom alerts',
      'Craft effective InMail outreach campaigns'
    ],
    audience: 'B2B sales professionals, account executives, and business development teams.',
    benefits: 'Consistently generate high-intent leads and shorten the prospecting phase of your sales cycle.'
  },
  {
    id: 'ai-productivity',
    title: 'AI Productivity for Sales Professionals',
    icon: Zap,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    overview: 'Use AI tools like Copilot, ChatGPT, and automated workflows to accelerate reports, presentations, and business analysis.',
    outcomes: [
      'Draft personalized sales emails and proposals instantly',
      'Summarize meeting notes and extract action items',
      'Generate data analysis scripts and formulas using AI',
      'Create compelling presentation outlines in minutes'
    ],
    audience: 'Forward-thinking sales professionals looking to gain a competitive edge through technology.',
    benefits: 'Multiply your output, reduce administrative burden, and spend more time actually selling.'
  }
];

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Training Programs</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive courses designed to equip you with the technical skills needed to excel in modern, data-driven sales environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Course Header/Icon Area */}
                  <div className="lg:col-span-4 bg-slate-50 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className={`w-16 h-16 ${course.bg} ${course.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <course.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{course.title}</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">{course.overview}</p>
                  </div>

                  {/* Course Details Area */}
                  <div className="lg:col-span-8 p-8 lg:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          Key Learning Outcomes
                        </h3>
                        <ul className="space-y-3">
                          {course.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                              <span className="leading-relaxed">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Who Should Attend</h3>
                          <p className="text-slate-600 leading-relaxed">{course.audience}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Benefits</h3>
                          <p className="text-slate-600 leading-relaxed">{course.benefits}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Inquire about this course <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure which program is right for you?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us for a free consultation. We'll help you identify the skills gap in your team and recommend the perfect training path.
          </p>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-600/20"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
