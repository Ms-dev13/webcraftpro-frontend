import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  ShoppingCart, 
  User, 
  Zap, 
  Smartphone, 
  Search,
  Palette,
  Shield
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Business Websites",
      description: "Professional websites that showcase your business and convert visitors into customers.",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment processing and inventory management.",
      features: ["Payment Gateway", "Inventory System", "Order Tracking", "Customer Portal"]
    },
    {
      icon: User,
      title: "Portfolio Websites",
      description: "Stunning portfolios that showcase your work and attract potential clients.",
      features: ["Gallery Showcase", "Project Details", "Contact Forms", "Social Integration"]
    },
    {
      icon: Zap,
      title: "Landing Pages",
      description: "High-converting landing pages designed to maximize your marketing campaigns.",
      features: ["A/B Testing", "Lead Capture", "Analytics", "Conversion Tracking"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Cross-Platform", "Native Performance", "Push Notifications", "Offline Support"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Comprehensive search engine optimization to improve your online visibility.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ongoing security updates and maintenance to keep your website safe and running.",
      features: ["Security Monitoring", "Regular Updates", "Backup Systems", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent ml-3">
                Services
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We offer comprehensive web development and digital solutions 
              to help your business succeed in the digital world.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">
                Need Something Custom?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We also offer custom development solutions tailored to your specific needs. 
                Let's discuss how we can help bring your vision to life.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-semibold hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Discuss Your Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
