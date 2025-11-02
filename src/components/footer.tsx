import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Web Development', href: '#services' },
      { name: 'E-commerce', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'SEO Services', href: '#services' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    Resources: [
      // { name: 'Blog', href: '#' },
      // { name: 'Case Studies', href: '#' },
      // { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#contact' }
    ]
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
                WebCraft Pro
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We create modern, high-converting websites that help businesses grow online. 
                From startups to enterprises, we deliver exceptional results that drive success.
              </p>
              <div className="flex space-x-4">
                {[
                  // { name: 'Twitter', icon: '𝕏', href: '#' },
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  // { name: 'GitHub', icon: '🐙', href: '#' },
                  { name: 'Instagram', icon: '📸', href: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-muted-foreground text-sm">
              <span>© {currentYear} WebCraft Pro. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>for amazing businesses.</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
