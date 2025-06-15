export interface PartnershipData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  existingPartners: {
    title: string;
    description: string;
    buttonText: string;
  };
  businessPartnership: {
    title: string;
    description: string;
    buttonText: string;
  };
  researchPartnership: {
    title: string;
    description: string;
    buttonText: string;
  };
  impact: {
    title: string;
    stats: Array<{
      number: string;
      description: string;
      color: string;
    }>;
  };
  partners: Array<{
    id: number;
    logo: string;
    title: string;
    description: string;
    buttonText: string;
  }>;
  testimonial: {
    title: string;
    quote: string;
    author: string;
    position: string;
    image: string;
  };
  footer: {
    companyInfo: {
      name: string;
      year: string;
      rights: string;
    };
    sections: Array<{
      title: string;
      links: Array<{
        text: string;
        href: string;
      }>;
    }>;
    bottomLinks: Array<{
      text: string;
      href: string;
    }>;
  };
}

export const mockData: PartnershipData = {
  hero: {
    title: "Partner with us",
    subtitle: "Join us to build innovative solutions and make medicine accessible",
    description: "Making a holistic impact on the health of patients worldwide requires us to work with partners across the healthcare value chain. From other pharmaceutical companies, doctors, healthcare professionals, hospitals, distribution networks and retailers, we work with all of them always keeping the end consumer – the patient at the center of all we do. We focus on our partners with a high-value strategic mindset and who place a premium on quality, compliance and relationships.",
    image: "https://i.ibb.co/pvTDNS5q/2b4a49508602451c852e79849647ea19107cfbfb.jpg"
  },
  existingPartners: {
    title: "For Existing Partners",
    description: "This portal provides instant access to RFx, Purchase Orders, ASN's, GRN's, Invoice statuses, and more.",
    buttonText: "Partner Portal"
  },
  businessPartnership: {
    title: "Partner with us for business",
    description: "Ensuring a continuous supply, remaining cost-competitive and guaranteeing highest quality are vital to provide affordable medicines to patients worldwide. To achieve this, we work with business partners in various ways across the value chain. We emphasize fair, transparent and ethical practices for all our partners who share the same commitment towards compliance with laws, regulations, published standards and environmental practices. If you're interested in partnering with Dr. Reddy's, we'd love to hear of your products and services. Register with us!",
    buttonText: "Register With Us"
  },
  researchPartnership: {
    title: "Partner with us for research",
    description: "Research and development is central to our work for patients. As an R&D driven organization, we value shared knowledge and skills. We seek partnerships within the industry to create high-quality, affordable medicines. Currently, we collaborate with nearly 50 partners globally, mainly in the USA, Western Europe, and India. If you need assistance, please post your query.",
    buttonText: "Post An Enquiry"
  },
  impact: {
    title: "Our partnerships & impact",
    stats: [
      {
        number: "1071",
        description: "Drug Master Files",
        color: "#5225B5"
      },
      {
        number: "41%",
        description: "Reduced Energy Consumption",
        color: "#5225B5"
      },
      {
        number: "30%",
        description: "Reduced Production Lead Time",
        color: "#5225B5"
      }
    ]
  },
  partners: [
    {
      id: 1,
      logo: "Nestlé",
      title: "A joint venture to bring nutraceutical brands to consumers in India.",
      description: "",
      buttonText: "Read More"
    },
    {
      id: 2,
      logo: "sanofi",
      title: "Distribution agreement for paediatric and adult vaccine brands in India.",
      description: "",
      buttonText: "Read More"
    },
    {
      id: 3,
      logo: "BILL & MELINDA GATES Foundation",
      title: "Developing an injectable contraceptive for low-income regions in Asia and Africa.",
      description: "",
      buttonText: "Read More"
    }
  ],
  testimonial: {
    title: "Leader's POV",
    quote: "We understand that quality and safety can have significant effect on patients' lives.",
    author: "Deepak Sapra,",
    position: "CEO, API and Services",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  footer: {
    companyInfo: {
      name: "Dr.Reddy's",
      year: "2025",
      rights: "Dr.Reddy's Laboratories Ltd. All rights reserved."
    },
    sections: [
      {
        title: "Our Company",
        links: [
          { text: "About Us", href: "#" },
          { text: "Our Businesses", href: "#" },
          { text: "Our Capabilities", href: "#" }
        ]
      },
      {
        title: "",
        links: [
          { text: "Our Leadership", href: "#" },
          { text: "Sustainability", href: "#" },
          { text: "Partnerships", href: "#" }
        ]
      },
      {
        title: "",
        links: [
          { text: "Oncology", href: "#" },
          { text: "Investors", href: "#" }
        ]
      },
      {
        title: "Quick Links",
        links: [
          { text: "Content Hub", href: "#" },
          { text: "Newsroom", href: "#" },
          { text: "Careers", href: "#" }
        ]
      },
      {
        title: "",
        links: [
          { text: "Report Adverse Event", href: "#" },
          { text: "Contact Us", href: "#" }
        ]
      }
    ],
    bottomLinks: [
      { text: "Terms of Use", href: "#" },
      { text: "Data Privacy", href: "#" },
      { text: "Accessibility", href: "#" },
      { text: "Global Cookie Policy", href: "#" },
      { text: "Caution Notice", href: "#" }
    ]
  }
};

export const fetchPartnershipData = async (): Promise<PartnershipData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockData;
};