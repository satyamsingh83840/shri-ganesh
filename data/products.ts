const products = [
  {
    id: 1,
    slug: "sg-aura-1200",
    name: "SG Aura 1200",
    category: "BLDC Fan",
    price: 2999,

    images: [
      "/images/products/sg-aura-1.webp",
      "/images/products/sg-aura-2.webp",
    ],

    featured: true,
    bestseller: true,

    description:
      "The SG Aura 1200 is a premium BLDC ceiling fan designed for modern homes. It delivers powerful airflow with silent operation and excellent energy efficiency.",

    features: [
      "Energy Efficient",
      "Silent Operation",
      "Remote Control",
      "Premium Finish",
    ],

    specifications: {
      Sweep: "1200 mm",
      Motor: "BLDC",
      Blades: "3",
      Warranty: "5 Years",
      Voltage: "220-240V",
      Finish: "Premium Matte",
      Speed: "380 RPM",
    },
  },

  {
    id: 2,
    slug: "sg-elite",
    name: "SG Elite",
    category: "Ceiling Fan",
    price: 2499,

    images: [
      "/images/products/sg-elite-1.webp",
      "/images/products/sg-elite-2.webp",
    ],

    featured: true,
    bestseller: false,

    description:
      "SG Elite combines elegant looks with powerful airflow, making it ideal for homes and offices.",

    features: ["Copper Motor", "Premium Finish", "High Speed", "Low Noise"],

    specifications: {
      Sweep: "1200 mm",
      Motor: "Copper",
      Blades: "3",
      Warranty: "2 Years",
      Voltage: "220-240V",
      Finish: "Glossy",
      Speed: "390 RPM",
    },
  },
];

export default products;
