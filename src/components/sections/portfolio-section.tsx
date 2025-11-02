import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink} from 'lucide-react';





const PortfolioSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Restaurant Website",
      description: "Coffee shop website highlighting menu, ambiance, and contact details.",
      category: "Business",
      image: "/images/restaurant-interior.jpg",
      technologies: ["React", "TailWind CSS"],
      liveUrl: "https://lumen-coffee-1jcm.vercel.app/ ",
      githubUrl: "#"
    },
    {
      title: "Turf Website",
      description: "Turf booking platform with real-time scheduling and online payments",
      category: "Business",
      //https://mir-s3-cdn-cf.behance.net/projects/404/267642225622209.Y3JvcCwzMjMyLDI1MjgsMCww.png
      image: "/images/sports-center.jpg",
      technologies: ["React.js", "SpringBoot", "MySQL"],
      liveUrl: "https://frontend-bookmytruf.vercel.app",
      githubUrl: "#"
    },
  /*  {
      title: "Clothing E-commerce",
      description: "Beautiful clothing website with online ordering system",
      category: "E-commerce",
      image: "/images/phoneix.png",
      technologies: ["React", "Express", "MySQL", "PayPal"],
      liveUrl: "#",
      githubUrl: "#"
    },*/
    {
      title: "Pet Grooming Service",
      description: "Pet grooming website with services, pricing, and booking options.",
      category: "Business",
      //"https://media.istockphoto.com/id/969077342/photo/a-chinese-female-dog-groomer-grooming-a-cavalier-king-charles-spaniel-dog.jpg?s=2048x2048&w=is&k=20&c=TW7Rq0lukRnaJ--cIQZp8k2CtYgzt1mYqR_3QUEn6kQ=
      image: "public/images/beautiful-pet-portrait-dog.jpg",
      technologies: ["React", "Nodejs", "Express", "MongoDB"],
      liveUrl: "https://pet-grooming-one.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Physiotherapy Website",
      description: "Healthcare site offering physiotherapy info and appointment scheduling.",
      category: "Healthcare",
      image: "public/images/healthcare.jpg",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      liveUrl: "https://physiotherapy-website-demo.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Studio Website",
      description: "Photography portfolio showcasing work with contact and booking form.",
      category: "Portfolio",
      image: "public/images/studio.png",
      technologies: ["NextJs", "EmailJS", "Tailwind CSS"],
      liveUrl: "https://murlidharstudio.com/",
      githubUrl: "#"
    },
    {
      title: "Salon Website",
      description: "Salon website with service showcase and easy appointment booking",
      category: "Business",
      image: "public/images/Salon.png",
      technologies: ["ReactJs", "EmailJS", "Tailwind CSS"],
      liveUrl: "https://blush-bloom-beauty-studio.vercel.app/",
      githubUrl: "#"
    }
  ];

  const categories = ["All","Business", "Portfolio", "Healthcare"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20">
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
                Portfolio
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Explore our recent projects and see how we've helped businesses 
              achieve their digital goals with stunning, functional websites.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                      
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
                      >
                        View Live
                      </a>
                     
                    </div>
                  </div>
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
                Like What You See?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's work together to create something amazing for your business. 
                We're always excited to take on new challenges and bring innovative ideas to life.
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
                Start Your Project
                <ExternalLink className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
