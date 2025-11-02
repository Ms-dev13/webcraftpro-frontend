import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Ashish Ahir",
      role: "CEO, Murlidhar Studio.",
      content: "WebCraft Pro transformed our online presence completely. Our conversion rate increased by 300% within the first month. Their attention to detail and understanding of our business needs was exceptional.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Pranav Gupta",
      role: "Founder, Digital Agency",
      content: "Working with WebCraft Pro was a game-changer for our business. They delivered a stunning website that perfectly represents our brand and has significantly improved our client acquisition.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Rakesh Sharma",
      role: "Marketing Director, RetailCo",
      content: "The team at WebCraft Pro is incredibly professional and talented. They understood our vision and brought it to life with a beautiful, functional e-commerce platform that our customers love.",
      rating: 4,
      image: "👩‍🎨"
    },
    {
      name: "David Lenor",
      role: "Owner, Local Restaurant",
      content: "Our new website has been a huge success! Online orders have increased by 250% and the user experience is fantastic. Highly recommend WebCraft Pro for any business looking to grow online.",
      rating: 4,
      image: "👨‍🍳"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
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
              What Our
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent ml-3">
                Clients Say
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center text-2xl mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "25+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24h", label: "Average Response Time" },
                { number: "4.7★", label: "Average Rating" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl bg-background/50 border border-border/50"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join Our Happy Clients?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's create something amazing together. Contact us today to discuss your project 
                and see how we can help your business grow online.
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
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
