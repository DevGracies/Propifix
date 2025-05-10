export const NAVLINKS = [
  {
    title: "home",
    url: "hero",
  },
  {
    title: "find an agent",
    url: "find-an-agent",
  },
  {
    title: "services",
    url: "discover",
  },
  {
    title: "how it works",
    url: "/how-it-works",
  },
  {
    title: "about us",
    url: "/about",
  },
  {
    title: "contact us",
    url: "/contact",
  },
];

export const SELECTOPTIONS = [
  {
    label: "Type",
    items: [
      "flat & apartment",
      "self contain",
      "mini flats",
      "houses",
      "land",
      "shop",
      "office space",
      "semi detached bungalow",
      "semi detached duplex",
      "detached bungalow",
      "detached duplex",
      "commercial property",
    ],
  },
  {
    label: "Bedroom",
    items: [
      "1 bedroom",
      "2 bedroom",
      "3 bedroom",
      "4 bedroom",
      "5 bedroom",
      "6 bedroom",
      "7 bedroom",
      "8 bedroom",
      "9 bedroom",
      "10 bedroom",
    ],
  },
  {
    label: "Toilet",
    items: [
      "1 toilet",
      "2 toilet",
      "3 toilet",
      "4 toilet",
      "5 toilet",
      "6 toilet",
      "7 toilet",
      "8 toilet",
      "9 toilet",
      "10 toilet",
    ],
  },
  {
    label: "Min. Price",
    items: [
      "50,000",
      "100,000",
      "200,000",
      "300,000",
      "400,000",
      "500,000",
      "600,000",
      "700,000",
      "800,000",
      "900,000",
      "1 million",
      "2 million",
    ],
  },
  {
    label: "Max. Price",
    items: [
      "500,000",
      "600,000",
      "700,000",
      "800,000",
      "900,000",
      "1 million",
      "2 million",
      "3 million",
      "5 million",
      "10 million",
      "20 million",
      "30 million",
    ],
  },
];

export const HOWITWORKS = [
  {
    no: "01",
    title: "Share or Enter Your Location",
    desc: "Allow Propifix to detect your location or enter it manually. This helps us show you agents and service providers near you.",
  },
  {
    no: "02",
    title: "Select Your Service",
    desc: "Choose the type of service you’re looking for—whether it’s real estate agents, carpentry, electrical work, or more.",
  },
  {
    no: "03",
    title: "Explore Nearby Professionals",
    desc: "View profiles of trusted agents and providers in your area on our interactive map. Click on any profile to see ratings, services offered, and contact options",
  },
  {
    no: "04",
    title: "Connect & Get Started",
    desc: "Reach out directly to the professional of your choice. Book services, schedule a meeting, or get answers to any questions you have—all in one place",
  },
];
export const WHYPROPIFIX = [
  {
    iconPath: "/icons/icon-verified.svg",
    title: "Verified Local Agents",
  },
  {
    iconPath: "/icons/token_trust.svg",
    title: "Property Insights You Can Trust",
  },
  {
    iconPath: "/icons/teany_icon.svg",
    title: "Wide Range of Properties",
  },
  {
    iconPath: "/icons/wrench.svg",
    title: "Comprehensive Home & Property Services",
  },
];

export const LOCATIONS = [
  {
    image: "/images/IkejaImage.jpg",
    location: "Ikeja",
    desc: "The vibrant heart of Lagos with a mix of residential and commercial areas. Known for its shopping malls, business hubs, and proximity to the airport",
  },
  {
    image: "/images/LekkiImage.jpg",
    location: "Lekki",
    desc: "A rapidly growing area known for its beautiful estates, upscale amenities, and stunning waterfront views, making it a top choice for families and professionals",
  },
  {
    image: "/images/VictoriaIsland.jpg",
    location: "Victoria Island",
    desc: "The business and financial hub of Lagos, offering high-end apartments, luxury hotels, and easy access to beaches and entertainment spots",
  },
];

export const TOPAGENTS = [
  {
    agentName: "grace olori",
    rating: 4.5,
    location: "ikeja",
  },
  {
    agentName: "grace olori",
    rating: 4.5,
    location: "ikeja",
  },
  {
    agentName: "grace olori",
    rating: 4.5,
    location: "ikeja",
  },
  {
    agentName: "grace olori",
    rating: 4.5,
    location: "ikeja",
  },
];

export const SERVICES = [
  {
    title: "carpentry",
    desc: "Custom furniture and repair services tailored to your needs",
    image: "/images/carpentry.jpg",
  },
  {
    title: "dry cleaning",
    desc: "Professional cleaning for your garments with convenience",
    image: "/images/dry-cleaning.png",
  },
  {
    title: "house cleaning",
    desc: "Comprehensive cleaning services for a spotless home",
    image: "/images/house-cleaning.png",
  },
  {
    title: "electrical work",
    desc: "Safe and reliable electrical installations and maintenance",
    image: "/images/electrical-work.png",
  },
  {
    title: "Painting and Wallpaper Installation",
    desc: "Transform your space with our expert painting and wallpaper services",
    image: "/images/painting.png",
    image2: "/images/wallpaper-installation.png",
  },
];

export const SOCIALLINKS = [
  {
    title: "facebook",
    icon: "/icons/facebook.svg",
    ref: "",
  },
  {
    title: "instagram",
    icon: "/icons/instagram.svg",
    ref: "",
  },
  {
    title: "twitter",
    icon: "/icons/twitter.svg",
    ref: "",
  },
  {
    title: "youtube",
    icon: "/icons/youtube.svg",
    ref: "",
  },
  {
    title: "whatsapp",
    icon: "/icons/whatsapp.svg",
    ref: "",
  },
];

export const FOOTERLINKS = {
  quickLinks: [...NAVLINKS],
  services: [
    { title: "carpentry", url: "/artisans?carpentry" },
    {
      title: "electrical work",
      url: "/artisans?electrical-work",
    },
    {
      title: "dry cleaning",
      url: "/artisans?dry-cleaning",
    },
    {
      title: "house cleaning",
      url: "/artisans?house-cleaning",
    },
    {
      title: "painting & wallpaper installation",
      url: "/artisans?painting&wallpaperinstallaion",
    },
    {
      title: "plumbing",
      url: "/artisans?plumbing",
    },
    {
      title: "tiling",
      url: "/artisans?tiling",
    },
    {
      title: "welding",
      url: "/artisans?welding",
    },
    {
      title: "HVAC installation",
      url: "/artisans?HVACinstallation",
    },
  ],
  legalLinks: [
    {
      title: "privacy policy",
      url: "/privacy-policy",
    },
    {
      title: "Terms of Service",
      url: "/terms&conditions",
    },
    {
      title: "FAQs",
      url: "/faq",
    },
  ],
};


export const MEMBERS = [
  {
    name: "Jame corper",
    role: "developer",
    link: [
      {
        title: "facebook",
        icon: "/icons/facebook.svg",
        ref: "",
      },
      {
        title: "instagram",
        icon: "/icons/instagram.svg",
        ref: "",
      },
      {
        title: "twitter",
        icon: "/icons/twitter.svg",
        ref: "",
      },
    ],
  },
  {
    name: "Jame corper",
    role: "developer",
    link: [
      {
        title: "facebook",
        icon: "/icons/facebook.svg",
        ref: "",
      },
      {
        title: "instagram",
        icon: "/icons/instagram.svg",
        ref: "",
      },
      {
        title: "twitter",
        icon: "/icons/twitter.svg",
        ref: "",
      },
    ],
  },
  {
    name: "Jame corper",
    role: "developer",
    link: [
      {
        title: "facebook",
        icon: "/icons/facebook.svg",
        ref: "",
      },
      {
        title: "instagram",
        icon: "/icons/instagram.svg",
        ref: "",
      },
      {
        title: "twitter",
        icon: "/icons/twitter.svg",
        ref: "",
      },
    ],
  },
  {
    name: "Jame corper",
    role: "developer",
    link: [
      {
        title: "facebook",
        icon: "/icons/facebook.svg",
        ref: "",
      },
      {
        title: "instagram",
        icon: "/icons/instagram.svg",
        ref: "",
      },
      {
        title: "twitter",
        icon: "/icons/twitter.svg",
        ref: "",
      },
    ],
  },
  {
    name: "Jame corper",
    role: "developer",
    link: [
      {
        title: "facebook",
        icon: "/icons/facebook.svg",
        ref: "",
      },
      {
        title: "instagram",
        icon: "/icons/instagram.svg",
        ref: "",
      },
      {
        title: "twitter",
        icon: "/icons/twitter.svg",
        ref: "",
      },
    ],
  },
  {
    name: "Jame corper",
    role: "developer",
    link: [
      {
        title: "facebook",
        icon: "/icons/facebook.svg",
        ref: "",
      },
      {
        title: "instagram",
        icon: "/icons/instagram.svg",
        ref: "",
      },
      {
        title: "twitter",
        icon: "/icons/twitter.svg",
        ref: "",
      },
    ],
  },
];

export const FAQ = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is Propifix?",
        answer:
          "Propifix is a real estate platform designed to connect property owners, agents, caretakers, and artisans with potential clients. We offer verified property listings, subscription plans for agents, and a marketplace for artisans and caretakers.",
      },
      {
        question: "How does Propifix work?",
        answerType: "List",
        answer: [
          {
            subtitle: "For Agents:",
            answer:
              "List properties, manage inquiries, and choose from our subscription plans.",
          },
          {
            subtitle: "For Property Owners:",
            answer:
              "Find verified agents, caretakers, and artisans for your needs.",
          },
          {
            subtitle: "For Artisans & Caretakers:",
            answer:
              "Create a profile, showcase skills, and get hired for maintenance or repairs.",
          },
        ],
      },
      {
        question: "Is Propifix free to use?",
        answer:
          "Browsing properties and services is free, but agents need a subscription plan to list properties, and artisans/caretakers may have premium profile options.",
      },
    ],
  },
  {
    title: "For Property Seekers & Owners",
    items: [
      {
        question: "How do I search for a property?",
        answer:
          "Use our advanced search filters to find properties based on location, price, type, and amenities.",
      },
      {
        question: "How do I connect with an agent?",
        answer:
          "Send your property specification as a request directly to all agents on the homepage by clicking “send request” after filling out your property spec.",
      },
      {
        question: " Are the property listings verified?",
        answer:
          "Yes, we ensure listings are verified and only trusted agents can post properties on Propifix.",
      },
    ],
  },
  {
    title: "For House Agents",
    items: [
      {
        question: "How do I list a property?",
        answerType: "List",
        answer: [
          {
            subtitle: 1,
            answer: "Register as an agent.",
          },
          {
            subtitle: 2,
            answer: "Choose a subscription plan.",
          },
          {
            subtitle: 3,
            answer: "Upload property details, images, and pricing.",
          },
          {
            subtitle: 4,
            answer:
              "Publish your listing for potential buyers and renters to see.",
          },
        ],
      },
      {
        question: "What are the subscription plans for agents?",
        answerDescription: "We offer three subscription plans:",
        answerType: "List",

        answer: [
          {
            subtitle: "Basic Plan:",
            answer: "Limited listings with basic features.",
          },
          {
            subtitle: "Standard Plan:",
            answer: "More listings and advanced features.",
          },
          {
            subtitle: "Premium Plan:",
            answer: "Maximumm exposure with top-tier features",
          },
        ],
      },
      {
        question: "Can I edit or remove my listings?",
        answer:
          "Yes, you can edit, update or remove listings anytime from your agent dashboard.",
      },
    ],
  },
  {
    title: "For Artisans & Caretakers",
    items: [
      {
        question: "How do I register as an artisans or caretaker?",
        answerType: "List",
        answer: [
          {
            subtitle: 1,
            answer: "Go to the registration page and select your profession.",
          },
          {
            subtitle: 2,
            answer:
              "Fill in your details and upload work samples (if available).",
          },
          {
            subtitle: 3,
            answer: "Submit your profile for approval.",
          },
        ],
      },
      {
        question: "How do client find me?",
        answer:
          "Clients searching for specific services can view your profile, check your portfolio, and contact you directly.",
      },
      {
        question: "How do I improve my visibility?",
        answerType: "List",
        answer: [
          {
            subtitle: 1,
            answer: " Keep your profile updated and detailed.",
          },
          {
            subtitle: 2,
            answer: "Upload high-quality images of your work.",
          },
          {
            subtitle: 3,
            answer: "Respond quickly to client inquiries.",
          },
          {
            subtitle: 3,
            answer: "Maintain high ratings and reviews from clients.",
          },
        ],
      },
    ],
  },
  {
    title: "Payment & Subscription",
    items: [
      {
        question: "How do I pay for a subscription plan?",
        answer:
          "You can pay securely online via debit/credit card, bank transfer, or mobile payment options.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel anytime, but active listening will remain until your plan expires.",
      },
      {
        question: "Are there refunds for subscription fees?",
        answer:
          "No, subscriptions are non-refundable, but you can upgrade or downgrade at any time.",
      },
    ],
  },
  {
    title: "Security & Support",
    items: [
      {
        question: "Is my data secure?",
        answer:
          "Yes! We use secure encryption to protect your data, and we do not share your details with third parties.",
      },
      {
        question: "How do I report a fraudulent listing or profile?",
        answer:
          "If you suspect fraudulent activity, please report it using the “Report” button on the listing or contact our support team.",
      },
      {
        question: "How do I contact Propifix support?",
        answerType: "List",
        answer: [
          {
            subtitle: "📧Email:",
            answer: "support@propifix.com",
          },
          {
            subtitle: "📞Phone:",
            answer: "+234 356-780-2058",
          },
          {
            subtitle: "💬Live Chat:",
            answer: ": Available on our website",
          },
        ],
      },
    ],
  },
];

export const TOKEN_KEY = '$propifix__auth__token';
export const REFRESH_TOKEN_KEY = '$propifix__refresh_auth__token';

export const ProfileDetails = [
  {
    title: "Artisan Full Name",
    value: "Grace Olori",
  },
  {
    title: "Contact",
    value: "07006599384",
  },
  {
    title: "Location",
    value: "Lagos, Ikeja",
  },
  {
    title: "Profession/Skill",
    value: "Carpenter",
  },
  {
    title: "Language",
    value: "English, French, Yoruba, Spanish, Igbo",
  },
  {
    title: "Date Registered",
    value: "Dec 23, 2024",
  },
];

export const feedbackList = [
  {
    rating: 3.5,
    feedback: `“I recently worked with [Agent's Name], and the experience was nothing
        short of exceptional. They were incredibly responsive, always answering
        my inquiries promptly, and their knowledge of the market was impressive.
        “`,
    author: "Olori Grace",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
  {
    rating: 4.5,
    feedback: `“I had a fantastic experience with [Agent's Name]. They were attentive to my needs and went above and beyond to ensure I found the perfect home. I highly recommend their services!”`,
    author: "Grace Olori",
    authorImage: "/images/grace.jpg",
    date: "23/12/2024",
  },
];

export const MOREINFO = [
  {
    title: "service area",
    desc: "Residential, Industrial, Commercial",
  },
  {
    title: "Frequency",
    desc: "One-Time, Yearly, Monthly",
  },
  {
    title: "Work Experience",
    desc: "5 years",
  },
  {
    title: "Round-the-Clock Service",
    desc: "Yes",
  },
  {
    title: "Provide Regular Service",
    desc: "Yes",
  },
  {
    title: "Service Includes",
    desc: "Air Cleaning, Carpet Cleaning, Clean-Up After Work, Dusting, Gutter Cleaning, Kitchen Appliance Cleaning, Laundry & Dry Cleaning Services, Mopping, Moss Removal, Power & Pressure Washing, Reinstating Furniture, Vacuuming, Wall Washing, Windows Cleaning",
  },
];

export const SERVICEIMAGESOURCE = [
  "/work/image1.jpg",
  "/work/image2.jpg",
  "/work/image3.avif",
  "/work/images4.jpeg",
  "/work/images5.jpeg",
  "/work/images6.jpeg",
];
