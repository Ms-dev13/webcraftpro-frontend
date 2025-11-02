import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Award, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Conversion-Focused",
      description: "Every element is designed to turn visitors into customers"
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "We prioritize user experience and accessibility"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-quality code and modern design standards"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                About
              </span>{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                WebCraft Pro
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We create modern business websites that convert visitors into customers. 
              Our team combines cutting-edge technology with proven design principles to deliver exceptional results.
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Us?
              </h3>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With years of experience in web development and digital marketing, 
                  we understand what it takes to create websites that not only look great 
                  but also drive business growth.
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our approach combines modern design trends with proven conversion optimization 
                  techniques. We don't just build websites – we create digital experiences 
                  that help your business thrive in the competitive online landscape.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/20 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/10"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To empower businesses with stunning, high-converting websites that drive growth 
              and create lasting digital success. We believe every business deserves a web presence 
              that reflects their quality and helps them achieve their goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
