import { motion } from 'motion/react';
import { Mail, Share2, Link as LinkIcon, Terminal, BarChart3 } from 'lucide-react';

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <div className="grid md:grid-cols-2 gap-20 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-primary font-bold text-sm tracking-widest uppercase block">Contact</span>
            <h2 className="text-5xl font-bold text-on-surface editorial-spacing">Let's Connect</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Have a project in mind or just want to chat about backend architecture? I'm always open to new opportunities and technical discussions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Me</p>
                <p className="text-lg font-semibold text-on-surface"><a href="mailto:varunkandimalla333@gmail.com" className="hover:text-primary transition-colors">varunkandimalla333@gmail.com</a></p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Share2 size={20} />
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                  <LinkIcon size={24} />
                </a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                  <Terminal size={24} />
                </a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                  <BarChart3 size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface-container-low p-8 md:p-10 rounded-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-on-surface-variant editorial-spacing uppercase">Full Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-surface-container-lowest border-0 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-on-surface-variant editorial-spacing uppercase">Email Address</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-surface-container-lowest border-0 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-on-surface-variant editorial-spacing uppercase">Message</label>
              <textarea 
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-surface-container-lowest border-0 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-primary text-on-primary rounded-lg font-bold hover:bg-primary-dim transition-all shadow-md active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
