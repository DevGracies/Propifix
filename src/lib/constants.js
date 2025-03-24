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
    url: "how-it-works",
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
      url: "/privacypolicy",
    },
    {
      title: "Terms of Service",
      url: "/termsofservice",
    },
    {
      title: "FAQs",
      url: "/FAQs",
    },
  ],
};