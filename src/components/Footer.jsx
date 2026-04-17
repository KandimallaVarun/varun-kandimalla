import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-on-surface-variant text-sm leading-relaxed">
          © 2025 Designed by Varun Kandimalla
        </p>
        <div className="flex gap-6 items-center">
          <a href="https://github.com/KandimallaVarun" target='_blank' rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/VarunKandimalla" target='_blank' rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors text-xl">
            <FaLinkedin />
          </a>
          <a href="#" target='_blank' rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors text-xl">
            <FaTwitter />
          </a>
          <a href="https://leetcode.com" target='_blank' rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors text-xl">
            <SiLeetcode />
          </a>
          <a href="https://www.hackerrank.com" target='_blank' rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors text-xl">
            <SiHackerrank />
          </a>
        </div>
      </div>
    </footer>
  );
}
