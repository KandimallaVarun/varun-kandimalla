import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/50 bg-surface">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-on-surface-variant text-sm leading-relaxed">
          © 2024 The Curated Portfolio. Designed with intentionality.
        </p>
        <div className="flex gap-8">
          <a href="https://github.com/KandimallaVarun" target='_blank' className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium hover:underline underline-offset-4">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/VarunKandimalla" target='_blank' className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium hover:underline underline-offset-4">
            LinkedIn
          </a>
          <a href="#" target='_blank' className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium hover:underline underline-offset-4">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
