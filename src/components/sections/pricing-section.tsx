import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Check, Star, ArrowRight } from 'lucide-react';
import { getPricingData, PricingPlan, AddOnCategory } from '../../services/pricingService';

const PricingSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [pricingData, setPricingData] = useState<{ plans: PricingPlan[]; addOnCategories: AddOnCategory[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const loadPricingData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPricingData();
        setPricingData(data);
      } catch (err) {
        console.error('Failed to load pricing data:', err);
        setError('Failed to load pricing information. Please try again later.');
        setPricingData(null); // Ensure no stale data is shown
      } finally {
        setLoading(false);
      }
    };

    loadPricingData();
  }, []);

  if (loading) {
    return (
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading pricing plans...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !pricingData) {
    return (
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-destructive">{error || 'Could not load pricing data.'}</p>
          </div>
        </div>
      </section>
    );
  }

  const { plans, addOnCategories } = pricingData;

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Pricing
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent ml-3">
                Plans
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Choose the perfect plan for your business. All plans include our premium support and quality guarantee.
            </motion.p>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className={`relative flex`} // Use flex to make card take full height
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <Card className={`w-full flex flex-col transition-all duration-300 hover:shadow-xl ${
                  plan.isPopular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'hover:border-primary/50'
                }`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price}
                    </div>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-grow">
                    {/* Perfect For */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                        Perfect For
                      </h4>
                      <p className="text-sm">{plan.perfectFor}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-4 h-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Delivery & Support */}
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery:</span>
                        <span className="font-medium">{plan.delivery}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Support:</span>
                        <span className="font-medium">{plan.support}</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.isPopular
                          ? 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90'
                          : ''
                      }`}
                      variant={plan.isPopular ? 'default' : 'outline'}
                      onClick={() => setSelectedPlan(selectedPlan === plan.name ? null : plan.name)}
                    >
                      {selectedPlan === plan.name ? 'Hide Add-ons' : 'View Add-ons'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Add-ons Section */}
          {selectedPlan && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Add-on Services for {selectedPlan}
                </h3>
                <p className="text-muted-foreground">
                  Enhance your plan with these additional services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {addOnCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold text-center mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      {category.name}
                    </h4>

                    <div className="space-y-3">
                      {category.addOns.map((addOn, addOnIndex) => (
                        <motion.div
                          key={addOnIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + addOnIndex * 0.05, duration: 0.3 }}
                          className="p-4 rounded-lg bg-background border border-border hover:border-primary/20 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold">{addOn.name}</h5>
                            <span className="text-sm font-medium text-primary whitespace-nowrap pl-2">{addOn.priceRange}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{addOn.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and get a personalized quote.
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
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;