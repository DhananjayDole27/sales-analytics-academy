import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: '5 Excel Formulas Every Sales Analyst Needs to Know',
    excerpt: 'Stop wasting hours on manual data entry. These five advanced Excel formulas will automate your sales reporting and uncover hidden trends.',
    category: 'Excel Tips',
    author: 'Dhananjay Dole',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Building Your First Power BI Sales Dashboard',
    excerpt: 'A step-by-step guide to connecting your CRM data to Power BI and creating an interactive dashboard that your sales leaders will love.',
    category: 'Power BI',
    author: 'Dhananjay Dole',
    date: 'Nov 05, 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Why CRM Adoption Fails (And How to Fix It)',
    excerpt: 'Implementing Salesforce is only half the battle. Discover the psychological and operational reasons why sales teams resist CRM adoption and strategies to overcome them.',
    category: 'CRM Automation',
    author: 'Dhananjay Dole',
    date: 'Dec 18, 2023',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Advanced LinkedIn Sales Navigator Strategies for B2B',
    excerpt: 'Move beyond basic searches. Learn how to use boolean logic, saved searches, and account mapping to build a high-quality B2B pipeline.',
    category: 'Lead Generation',
    author: 'Dhananjay Dole',
    date: 'Jan 22, 2024',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'The Future of Sales: AI Productivity Tools',
    excerpt: 'How tools like Copilot and ChatGPT are changing the way sales professionals draft emails, analyze data, and prepare for client meetings.',
    category: 'AI & Productivity',
    author: 'Dhananjay Dole',
    date: 'Feb 10, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Sales Analytics Strategies for Manufacturing Companies',
    excerpt: 'A deep dive into the specific KPIs and reporting structures that manufacturing sales teams need to track to optimize their complex sales cycles.',
    category: 'Sales Analytics',
    author: 'Dhananjay Dole',
    date: 'Mar 05, 2024',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Blog() {
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Insights & Blog</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert advice, tutorials, and thought leadership on sales analytics, CRM automation, and data-driven business strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
