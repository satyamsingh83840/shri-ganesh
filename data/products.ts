const products = [
  {
    id: 1,
    slug: "ventilation-fan-8",
    name: "VENTILATION FAN 8 INCH",
    category: "Ventilation Fan",
    price: 840,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783944966/Screenshot_20260713-174230.WhatsApp_iluacw.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783944966/Screenshot_20260713-174157.WhatsApp_xdrym6.png",
    ],
    featured: true,
    bestseller: true,
    description:
      "Compact 8-inch ventilation fan with powerful airflow, low noise, and energy-efficient performance for homes, kitchens, bathrooms, and offices.",
    features: [
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
      "Long Life",
    ],
    specifications: {
      Category: "Ventilation Fan",
      Size: "8 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "Black",
    },
  },
  {
    id: 2,
    slug: "aixal-exhaust-fan-6",
    name: "AXIAL EXHAUST FAN 6 INCH",
    category: "Exhaust Fan",
    price: 880,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945213/Screenshot_20260713-174943.WhatsApp_fyg6uz.png",
    ],
    featured: true,
    bestseller: true,
    description:
      "Compact 6-inch axial exhaust fan with powerful airflow, low noise, and energy-efficient performance for kitchens, bathrooms, and small spaces.",

    features: [
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
      "Long Life",
    ],

    specifications: {
      Category: "Exhaust Fan",
      Size: "6 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "White",
    },
  },
  {
    id: 3,
    slug: "aixal-exhaust-fan-4",
    name: "AXIAL EXHAUST FAN 4 INCH",
    category: "Exhaust Fan",
    price: 720,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945213/Screenshot_20260713-174901.WhatsApp_zlt2ul.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Compact 4-inch axial exhaust fan with powerful airflow, low noise, and energy-efficient performance for kitchens, bathrooms, and small spaces.",

    features: [
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
      "Long Life",
    ],

    specifications: {
      Category: "Exhaust Fan",
      Size: "4 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "White",
    },
  },
  {
    id: 4,
    slug: "wall-cum-table-fan-14",
    name: "WALL CUM TABLE FAN 14 INCH (MOVING)",
    category: "Table Fan",
    price: 1500,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945477/Screenshot_20260713-175345.WhatsApp_d2mnuf.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945409/Screenshot_20260713-175254.WhatsApp_bgcbos.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Versatile 14-inch wall cum table fan with oscillation, powerful airflow, and energy-efficient cooling for home and office use.",

    features: [
      "Wall & Table Use",
      "Oscillating Head",
      "Powerful Airflow",
      "Low Noise",
      "Durable Build",
      "Easy Installation",
    ],

    specifications: {
      Category: "Table Fan",
      Size: "14 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall / Table",
      Color: "White",
    },
  },
  {
    id: 5,
    slug: "wall-cum-table-fan-10",
    name: "WALL CUM TABLE FAN 10 INCH (MOVING)",
    category: "Table Fan",
    price: 1200,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945409/Screenshot_20260713-175241.WhatsApp_qrwged.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945409/Screenshot_20260713-175254.WhatsApp_bgcbos.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Versatile 10-inch wall cum table fan with oscillation, powerful airflow, and energy-efficient cooling for home and office use.",

    features: [
      "Wall & Table Use",
      "Oscillating Head",
      "Powerful Airflow",
      "Low Noise",
      "Durable Build",
      "Easy Installation",
    ],

    specifications: {
      Category: "Table Fan",
      Size: "10 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall / Table",
      Color: "White",
    },
  },
  {
    id: 6,
    slug: "wall-cum-table-fan-9-black",
    name: "WALL CUM TABLE FAN 9 INCH BLACK",
    category: "Table Fan",
    price: 880,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945781/Screenshot_20260713-175508.WhatsApp_ftm39l.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945782/Screenshot_20260713-175525.WhatsApp_dqgvkc.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Compact 9-inch wall cum table fan with powerful airflow, low noise, and dual-use design for home and office cooling.",

    features: [
      "Wall & Table Use",
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Compact Design",
    ],

    specifications: {
      Category: "Table Fan",
      Size: "9 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall / Table",
      Color: "Black",
    },
  },
  {
    id: 7,
    slug: "wall-cum-table-fan-12-black",
    name: "WALL CUM TABLE FAN 12 INCH BLACK",
    category: "Ventilation Fan",
    price: 1060,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175545.WhatsApp_uawyl6.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945782/Screenshot_20260713-175525.WhatsApp_dqgvkc.png",
    ],
    featured: true,
    bestseller: true,
    description:
      "Compact 12-inch wall cum table fan with powerful airflow, low noise, and dual-use design for home and office cooling.",

    features: [
      "Wall & Table Use",
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Compact Design",
    ],

    specifications: {
      Category: "Table Fan",
      Size: "12 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall / Table",
      Color: "Black",
    },
  },

  {
    id: 9,
    slug: "wall-cum-table-fan-12",
    name: "WALL CUM TABLE FAN 12 INCH ",
    category: "Table Fan",
    price: 1040,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175545.WhatsApp_uawyl6.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Compact 12-inch wall cum table fan with powerful airflow, low noise, and dual-use design for home and office cooling.",

    features: [
      "Wall & Table Use",
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Compact Design",
    ],

    specifications: {
      Category: "Table Fan",
      Size: "12 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Color: "White",
      Mounting: "Wall / Table",
    },
  },
  {
    id: 10,
    slug: "decorative-exhaust-fan-4",
    name: " DECORATIVE EXHAUST FAN 4 INCH",
    category: "Exhaust Fan",
    price: 720,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945342/Screenshot_20260713-175148.WhatsApp_ayhgeq.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945341/Screenshot_20260713-175059.WhatsApp_anpxx3.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Stylish 4-inch decorative exhaust fan with efficient ventilation, low noise, and energy-saving performance for bathrooms and kitchens.",

    features: [
      "Modern Design",
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
    ],

    specifications: {
      Category: "Exhaust Fan",
      Size: "4 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "White",
    },
  },
  {
    id: 11,
    slug: "decorative-exhaust-fan-6",
    name: " DECORATIVE EXHAUST FAN 6 INCH",
    category: "Exhaust Fan",
    price: 880,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945342/Screenshot_20260713-175131.WhatsApp_qfcia4.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945342/Screenshot_20260713-175148.WhatsApp_ayhgeq.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Stylish 6-inch decorative exhaust fan with efficient ventilation, low noise, and energy-saving performance for bathrooms and kitchens.",

    features: [
      "Modern Design",
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
    ],

    specifications: {
      Category: "Exhaust Fan",
      Size: "6 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "White",
    },
  },
  {
    id: 12,
    slug: "exhaust-fan-12",
    name: "EXHAUST FAN 12 INCH",
    category: "Exhaust Fan",
    price: 1120,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945783/Screenshot_20260713-175620.WhatsApp_e1q5ga.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175633.WhatsApp_jyad1j.png",
    ],
    featured: true,
    bestseller: true,
    description:
      "Powerful 12-inch exhaust fan with high airflow, low noise, and energy-efficient ventilation for homes, offices, and commercial spaces.",

    features: [
      "High Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
      "Long Life",
    ],

    specifications: {
      Category: "Exhaust Fan",
      Size: "12 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "Black",
    },
  },
  {
    id: 13,
    slug: "exhaust-fan-9",
    name: "EXHAUST FAN 9 INCH",
    category: "Exhaust  Fan",
    price: 830,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175653.WhatsApp_i3gs0o.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175633.WhatsApp_jyad1j.png",
    ],
    featured: true,
    bestseller: true,
    description:
      "Powerful 9-inch exhaust fan with high airflow, low noise, and energy-efficient ventilation for homes, offices, and commercial spaces.",

    features: [
      "High Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
      "Long Life",
    ],

    specifications: {
      Category: "Exhaust  Fan",
      Size: "9 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "White",
    },
  },
  {
    id: 14,
    slug: "ventilation-fan-6",
    name: "VENTILATION FAN 6 INCH",
    category: "Ventilation Fan",
    price: 760,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175746.WhatsApp_r0lgzg.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175821.WhatsApp_nmuxdv.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Compact 6-inch ventilation fan with efficient airflow, low noise, and energy-saving performance for kitchens and bathrooms.",
    features: [
      "Powerful Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
      "Long Life",
    ],
    specifications: {
      Category: "Ventilation Fan",
      Size: "6 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "White",
    },
  },
  {
    id: 15,
    slug: "ventilation-fan-10",
    name: "VENTILATION FAN 10 INCH",
    category: "Ventilation Fan",
    price: 1060,
    images: [
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945785/Screenshot_20260713-175759.WhatsApp_n21pen.png",
      "https://res.cloudinary.com/dcgh3mayf/image/upload/v1783945784/Screenshot_20260713-175821.WhatsApp_nmuxdv.png",
    ],
    featured: false,
    bestseller: false,
    description:
      "Powerful 10-inch ventilation fan with high airflow, low noise, and energy-efficient performance for homes and offices.",
    features: [
      "High Airflow",
      "Low Noise",
      "Energy Efficient",
      "Durable Build",
      "Easy Installation",
      "Long Life",
    ],
    specifications: {
      Category: "Ventilation Fan",
      Size: "10 Inch",
      Voltage: "220-240V",
      Frequency: "50 Hz",
      Mounting: "Wall Mount",
      Color: "White",
    },
  },
];

export default products;
