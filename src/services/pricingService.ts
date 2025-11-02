export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  perfectFor: string;
  delivery: string;
  support: string;
  isPopular?: boolean;
}

export interface AddOn {
  name: string;
  priceRange: string;
  description: string;
  category: string;
}

export interface AddOnCategory {
  name: string;
  addOns: AddOn[];
}

export interface PricingData {
  plans: PricingPlan[];
  addOnCategories: AddOnCategory[];
}

/**
 * Fetches the pricing data from the pricing.json file.
 * @returns A promise that resolves to the structured pricing data.
 */
// Fallback pricing data in case JSON file fails to load
const fallbackPricingData: PricingData = {
  plans: [
    {
      name: "Ultra-Budget Entry",
      price: "₹6,999",
      description: "A simple, elegant static site perfect for a foundational online presence.",
      features: [
        "Up to 3 pages (e.g., Home, About, Contact)",
        "Mobile-responsive design",
        "Basic contact form and image gallery",
        "Basic on-page SEO setup",
        "SSL security & hosting guidance"
      ],
      perfectFor: "Personal websites, basic business presence",
      delivery: "5-7 business days",
      support: "1 week of email support",
      isPopular: false
    },
    {
      name: "Startup",
      price: "₹12,999",
      description: "A growth-ready foundation with a content management system.",
      features: [
        "Up to 8 pages with a CMS (e.g., WordPress)",
        "Custom or semi-custom design",
        "Branding and graphics integration",
        "Enhanced SEO & analytics setup",
        "Blog functionality",
        "Forms & basic CRM integration"
      ],
      perfectFor: "New startups, entrepreneurs, MVP development",
      delivery: "7-10 business days",
      support: "2 weeks of support",
      isPopular: false
    },
    {
      name: "Business",
      price: "₹22,999",
      description: "A complete business solution with a fully custom design and admin dashboard.",
      features: [
        "Up to 15 pages with a full custom design",
        "Custom admin dashboard (CMS backend)",
        "Professional SEO package",
        "Advanced performance & security",
        "Content management by non-technical staff"
      ],
      perfectFor: "Growing SMBs, local businesses, service providers",
      delivery: "10-14 business days",
      support: "1 month of maintenance",
      isPopular: true
    },
    {
      name: "Professional",
      price: "₹39,999",
      description: "Premium features and a full e-commerce solution for online stores.",
      features: [
        "Unlimited pages with a highly polished custom design",
        "Full e-commerce store implementation",
        "Secure checkout with multiple payment gateways",
        "Advanced analytics dashboard",
        "3+ months of full SEO services"
      ],
      perfectFor: "Established businesses, online stores",
      delivery: "15-18 business days",
      support: "3 months of priority support",
      isPopular: false
    },
    {
      name: "AI-Powered",
      price: "₹69,999",
      description: "Cutting-edge technology with advanced AI integrations for a competitive edge.",
      features: [
        "Everything in the Professional plan",
        "On-site conversational AI chatbot",
        "AI-driven content personalization",
        "Progressive Web App (PWA) functionality",
        "Enhanced performance with latest tech"
      ],
      perfectFor: "Tech-forward companies, SaaS businesses",
      delivery: "20-25 business days",
      support: "6 months of premium support",
      isPopular: false
    },
    {
      name: "Enterprise",
      price: "₹1,49,000+",
      description: "A fully custom, scalable platform tailored to your exact specifications.",
      features: [
        "All-inclusive custom platform (e.g., headless CMS, portal)",
        "Deep integration with third-party systems",
        "Enterprise-grade security & compliance",
        "Dedicated project manager & 24/7 support",
        "High-traffic, scalable architecture"
      ],
      perfectFor: "Large corporations, complex requirements",
      delivery: "30-45 business days",
      support: "1 year of comprehensive support",
      isPopular: false
    }
  ],
  addOnCategories: [
    {
      name: "Essential Add-ons",
      addOns: [
        {
          name: "Extra Pages",
          priceRange: "₹500 - ₹1,000 / page",
          description: "Add more pages to your website as your business grows.",
          category: "Essential Add-ons"
        },
        {
          name: "Advanced SEO Package",
          priceRange: "₹8,000 - ₹25,000",
          description: "A comprehensive SEO strategy to boost your search rankings.",
          category: "Essential Add-ons"
        },
        {
          name: "E-commerce Module",
          priceRange: "₹10,000 - ₹30,000",
          description: "Integrate a full-featured online store into your existing site.",
          category: "Essential Add-ons"
        },
        {
          name: "Performance Boost",
          priceRange: "₹5,000 - ₹15,000",
          description: "Optimize your site's speed and loading times for better UX.",
          category: "Essential Add-ons"
        },
        {
          name: "Advanced Security",
          priceRange: "₹8,000 - ₹20,000",
          description: "Strengthen your website's security against threats.",
          category: "Essential Add-ons"
        }
      ]
    },
    {
      name: "Marketing & Growth",
      addOns: [
        {
          name: "Custom Logo Design",
          priceRange: "₹2,000 - ₹5,000",
          description: "Get a unique and professional logo for your brand.",
          category: "Marketing & Growth"
        },
        {
          name: "Email Marketing Setup",
          priceRange: "₹3,000 - ₹10,000",
          description: "Setup and integration of email marketing campaigns.",
          category: "Marketing & Growth"
        },
        {
          name: "Google Ads Setup",
          priceRange: "₹5,000 - ₹15,000",
          description: "Professional setup of your Google Ads campaigns.",
          category: "Marketing & Growth"
        },
        {
          name: "Social Media Management",
          priceRange: "₹5,000 - ₹15,000 / month",
          description: "Ongoing management of your social media presence.",
          category: "Marketing & Growth"
        }
      ]
    },
    {
      name: "Technical & Advanced",
      addOns: [
        {
          name: "API Integrations",
          priceRange: "₹2,000 - ₹15,000 each",
          description: "Connect your website with third-party services and APIs.",
          category: "Technical & Advanced"
        },
        {
          name: "Custom Dashboard",
          priceRange: "₹8,000 - ₹25,000",
          description: "A tailored dashboard to manage your site's data.",
          category: "Technical & Advanced"
        },
        {
          name: "Cloud Hosting Setup",
          priceRange: "₹3,000 - ₹12,000",
          description: "Configuration and deployment on cloud hosting services.",
          category: "Technical & Advanced"
        }
      ]
    }
  ]
};

export async function getPricingData(): Promise<PricingData> {
  try {
    // Try to fetch the JSON file from the public directory
    const response = await fetch('Public/pricing.json');

    if (!response.ok) {
      console.warn('Failed to fetch pricing.json, using fallback data');
      return fallbackPricingData;
    }

    const data: PricingData = await response.json();
    return data;

  } catch (error) {
    console.warn('Error fetching pricing data, using fallback data:', error);
    // Return fallback data instead of throwing error
    return fallbackPricingData;
  }
}
