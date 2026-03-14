import { Link } from 'react-router-dom';
import { BarChart3, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Dole's Sales Analytics
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering Sales Teams with Data, Analytics, and Automation. Bridge the gap between traditional sales operations and modern data analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-white transition-colors">Training Programs</Link>
              </li>
              <li>
                <Link to="/corporate-training" className="text-sm hover:text-white transition-colors">Corporate Training</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white transition-colors">Insights & Blog</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-sm hover:text-white transition-colors">Power BI for Sales</Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-white transition-colors">Advanced Excel</Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-white transition-colors">Salesforce CRM</Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-white transition-colors">AI Productivity</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm">dhananjaydole27@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm">For call back, please fill and submit the contact form.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-sm">Pune, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Dole's Sales Analytics Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
