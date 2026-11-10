// Single source of truth for AvetCare v2 content.
// Copy and claims are carried over from v1 (no new marketing claims added).

export const contact = {
  company: "AvetCare Middle East LLC",
  phone: "+971 50 491 2633",
  phoneHref: "tel:+971504912633",
  email: "info@avetcare.ae",
  address: ["The Meydan Hotel, Grandstand, 6th Floor", "Meydan Road, Nad Al Sheba", "Dubai, United Arab Emirates"],
  hours: "Monday – Friday, 9:00 – 17:00",
  linkedin: "https://www.linkedin.com/in/avetcare-middle-east-llc",
  facebook: "https://www.facebook.com/profile.php?id=100093056221518",
  catalogue: "https://avetcare.ae/pdf/AVETCARECatalog.pdf",
};

export type Fact = [label: string, value: string];

export type Variant = {
  name: string;
  text: string;
  image: string;
  imageAlt: string;
  points: string[];
  /** "cutout" = product on white background (shown whole); "photo" = full-bleed photograph */
  imageKind?: "cutout" | "photo";
};

export type Product = {
  slug: string;
  name: string;
  /** one-line description used on cards */
  short: string;
  /** what the range includes, shown as small text on cards */
  range: string;
  image: string;
  title: string;
  intro: string;
  heroImage: string;
  heroKind?: "cutout" | "photo";
  facts: Fact[];
  factsNote?: string;
  variantsTitle: string;
  variants: Variant[];
  metaTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    slug: "claraclean",
    name: "ClaraClean®",
    short: "Dry-loaded microfibre textiles, activated with plain water just before use.",
    range: "Reload! reusable · Go! single-use",
    image: "/images/products/claraclean-set.jpg",
    title: "ClaraClean® dry-loaded cleaning system",
    intro:
      "ClaraClean® replaces chemical action with the mechanical action of the fabric. Cleaning additives are dry-loaded into the textiles after washing and activated with plain water just before use. No buckets, no dosing, no residue.",
    heroImage: "/images/products/claraclean-set.jpg",
    facts: [
      ["Water consumption", "Up to 90% less*"],
      ["Cleaning chemicals", "Up to 80% less*"],
      ["Reload! wash cycles", "700 or more"],
      ["Floor area per mop cover", "Up to 80 m²"],
      ["Textile material", "Water-split microfibre, eco range in 100% recycled polyester"],
      ["Certification", "Nordic Swan ecolabel, HACCP compliant"],
    ],
    factsNote: "*Manufacturer figures compared with conventional wet mopping.",
    variantsTitle: "Two systems, one principle",
    variants: [
      {
        name: "ClaraClean® Reload!",
        text: "Durable textiles that are washed, reloaded and reused. A sustainable, economical choice for organisations that put ecology and cost control first.",
        image: "/images/products/claraclean-cloths.jpg",
        imageAlt: "ClaraClean® Reload! cloths",
        imageKind: "cutout",
        points: [
          "Patented loading process for water-split microfibre",
          "At least 700 wash-and-wipe cycles",
          "Mops in different sizes and materials",
          "Less waste and lower running costs",
        ],
      },
      {
        name: "ClaraClean® Go!",
        text: "Disposable textiles that are thrown away after use. No washing or drying, which suits environments with the strictest hygiene requirements.",
        image: "/images/products/claraclean-mop-cover.jpg",
        imageAlt: "ClaraClean® Go! mop cover",
        imageKind: "cutout",
        points: [
          "A fresh textile for every area",
          "No laundry infrastructure needed",
          "Mops in a range of sizes and loads",
          "Suited to hospitals, hotels and offices",
        ],
      },
    ],
    metaTitle: "ClaraClean® Dry-Loaded Cleaning System | AvetCare",
    metaDescription:
      "ClaraClean dry-loaded microfibre textiles activated with water alone: up to 90% less water and 80% fewer chemicals. Reload! and Go! systems.",
  },
  {
    slug: "spraymopsysteme",
    name: "DRiZZ® Spray Mops",
    short: "Spray mops with colour-coded pressure bottles. No bucket to carry.",
    range: "DRiZZ® · DRiZZ® F · Easy DRiZZ®",
    image: "/images/products/drizz.jpg",
    title: "DRiZZ® spray mop systems",
    intro:
      "The DRiZZ® range builds the spray into the mop. Fill the bottle, spray and wipe for fast, streak-free results with covers that change in seconds.",
    heroImage: "/images/products/drizz-system.jpg",
    facts: [
      ["Pressure bottles", "Interchangeable, colour-coded"],
      ["Nozzles", "Aluminium, wide spray angle"],
      ["Trigger", "SoftTouch button"],
      ["Mop holders", "Ecoquick (flat) or Velcro"],
      ["Easy DRiZZ® tank", "500 ml, built into the handle"],
      ["Bucket required", "No"],
    ],
    variantsTitle: "The DRiZZ® range",
    variants: [
      {
        name: "DRiZZ® Spray Mop System",
        text: "A multi-patented spray mop with interchangeable, colour-coded pressure bottles. Aluminium nozzles and reinforced plastic parts make it tough enough for professional work, even under beds and chairs.",
        image: "/images/products/drizz-spray-mop.jpg",
        imageAlt: "DRiZZ® spray mop",
        imageKind: "cutout",
        points: [
          "A few pumps build full pressure",
          "A light press on the SoftTouch button starts the spray",
          "The spray angle wets the cloth evenly",
          "The flat Ecoquick holder glides into corners",
        ],
      },
      {
        name: "DRiZZ® F",
        text: "A spray mop with a Velcro holder for quick changes of Velcro mop covers. Fill it with water or cleaning agent and it spreads the liquid as a fine spray.",
        image: "/images/products/drizz.jpg",
        imageAlt: "DRiZZ® F spray mop",
        imageKind: "cutout",
        points: ["Velcro holder for fast cover changes", "Fine, even spray", "Handles stubborn dirt", "Ergonomic design"],
      },
      {
        name: "Easy DRiZZ®",
        text: "A simple, robust device for beginners and experienced users alike, and an easy way into the ClaraClean® system.",
        image: "/images/products/drizz-on-floor.jpg",
        imageAlt: "Easy DRiZZ® in use on a floor",
        imageKind: "photo",
        points: [
          "500 ml water tank in the handle",
          "Controlled water release for large areas",
          "For water-resistant floors",
          "Easy to handle, robust build",
        ],
      },
    ],
    metaTitle: "DRiZZ® Spray Mop Systems | AvetCare",
    metaDescription:
      "DRiZZ spray mop systems with colour-coded pressure bottles, aluminium nozzles and Ecoquick or Velcro holders. No bucket needed.",
  },
  {
    slug: "cleaningtextiles",
    name: "Cleaning Textiles",
    short: "Mop covers and surface cloths in standard and dry-loaded versions.",
    range: "Mop covers · Surface cloths · Reload! textiles",
    image: "/images/products/mop-covers.jpg",
    title: "Mop covers and cloths for every surface",
    intro:
      "Standard and dry-loaded microfibre textiles in colour-coded ranges, made for professional daily cleaning in washrooms, kitchens, wards and general areas.",
    heroImage: "/images/products/textiles-laundry.jpg",
    heroKind: "photo",
    facts: [
      ["Fastenings", "Hook-and-loop, pocket, tab"],
      ["Versions", "Standard and dry-loaded"],
      ["Colours", "Blue, red, yellow, green"],
      ["Care", "Machine washable, reloadable"],
      ["Germ reduction (Reload!)", "97%"],
      ["Certification", "Nordic Swan ecolabel, HACCP compliant"],
    ],
    variantsTitle: "The textile range",
    variants: [
      {
        name: "Mop covers",
        text: "Wiping and mop covers for every task and device, from dusting and dirt removal to water pickup.",
        image: "/images/products/mop-covers.jpg",
        imageAlt: "Colour-coded mop covers",
        imageKind: "cutout",
        points: [
          "Hook-and-loop, pocket and tab fastenings",
          "Various fibre types and dry-load levels",
          "Sizes for different tasks",
          "Dry-loaded versions only need tap water",
        ],
      },
      {
        name: "Surface cloths",
        text: "Cloths for dusting, removing stains and polishing on many types of surface. They pick up dirt well while cleaning gently.",
        image: "/images/products/surface-cloths.jpg",
        imageAlt: "Colour-coded surface cloths",
        imageKind: "cutout",
        points: [
          "Reusable and machine washable",
          "Many can be reloaded in the washing machine",
          "Tap water activates dry-loaded cloths",
          "Colour-coded by area",
        ],
      },
      {
        name: "ClaraClean® Reload! textiles",
        text: "High-performance microfibre for demanding environments, made for the patented Reload! process, which loads surfactants into water-split microfibre.",
        image: "/images/stock/microfiber-texture.jpg",
        imageAlt: "Close-up of blue microfibre",
        imageKind: "photo",
        points: ["Lowest microplastic level", "Nordic Swan ecolabel", "HACCP compliant", "97% germ reduction"],
      },
    ],
    metaTitle: "Cleaning Textiles: Mop Covers & Cloths | AvetCare",
    metaDescription:
      "Microfibre mop covers and surface cloths in standard and dry-loaded versions, colour-coded and Nordic Swan ecolabelled.",
  },
  {
    slug: "cleaningtrolley",
    name: "Cleaning Trolleys",
    short: "Modular trolleys, transport wagons and mop carts.",
    range: "ClaraClean® Trolley · Phailon wagon · Mop cart",
    image: "/images/products/claraclean-trolley.jpg",
    title: "Cleaning trolleys and mop carts",
    intro:
      "Modular trolleys, transport wagons and mop carts that keep supplies organised and within reach on every round.",
    heroImage: "/images/products/claraclean-trolleys.jpg",
    facts: [
      ["ClaraClean® Trolley material", "90% recycled PET"],
      ["Design", "Modular, configured to your site"],
      ["Compatible systems", "ClaraClean®, DRiZZ®, standard mops"],
      ["Mop cart", "Integrated mop wringer"],
    ],
    variantsTitle: "The trolley range",
    variants: [
      {
        name: "ClaraClean® Trolley",
        text: "A modular trolley that organises cleaning work, with options tailored to your needs. Supplies are stored neatly and easy to reach.",
        image: "/images/products/claraclean-trolley-black.jpg",
        imageAlt: "ClaraClean® Trolley",
        imageKind: "cutout",
        points: [
          "Made from 90% recycled PET",
          "Modern, modular design",
          "Works with a range of cleaning systems",
          "Configured to your requirements",
        ],
      },
      {
        name: "Phailon Transport Wagon",
        text: "A versatile trolley for moving cleaning products, textiles and equipment in warehouses, workshops, offices, hotels and industrial sites.",
        image: "/images/products/phailon-wagon.jpg",
        imageAlt: "Phailon transport wagon",
        imageKind: "cutout",
        points: ["Robust construction", "High load capacity", "Smooth-running wheels", "Ergonomic handling"],
      },
      {
        name: "Mop Cart",
        text: "A floor-cleaning trolley for commercial and industrial spaces that keeps cleaning agents and accessories within reach.",
        image: "/images/products/mop-cart.jpg",
        imageAlt: "Mop cart with wringer",
        imageKind: "cutout",
        points: ["Robust design", "Spacious shelf for supplies", "Integrated mop wringer", "Wheels that reach tight spaces"],
      },
    ],
    metaTitle: "Cleaning Trolleys & Mop Carts | AvetCare",
    metaDescription:
      "Modular ClaraClean trolleys made from 90% recycled PET, Phailon transport wagons and mop carts with integrated wringers.",
  },
  {
    slug: "syr",
    name: "SYR Tools",
    short: "Buckets, wringers, squeegees, brushes, handles and signage.",
    range: "Colour-coded tools and accessories",
    image: "/images/products/syr-2.jpg",
    title: "SYR professional tools and accessories",
    intro:
      "Buckets, wringers, squeegees, handles, brushes and safety signage from SYR, in colour-coded sets that complete your cleaning system.",
    heroImage: "/images/products/syr-2.jpg",
    facts: [
      ["Colour coding", "Blue, red, yellow, green"],
      ["Range", "Buckets, wringers, squeegees, brushes, handles, signage"],
      ["Sets", "Assembled to suit your areas"],
    ],
    variantsTitle: "",
    variants: [],
    metaTitle: "SYR Cleaning Tools & Accessories | AvetCare",
    metaDescription:
      "SYR buckets, wringers, squeegees, interchangeable handles, brushes and safety signage in colour-coded sets.",
  },
];

export const syrItems: { name: string; type: string; image: string }[] = [
  { name: "SYR Full Set – Blue", type: "Complete kit", image: "/images/products/syr-2.jpg" },
  { name: "Mop Bucket / Wringer", type: "Bucket & wringer", image: "/images/products/syr-1.jpg" },
  { name: "Floor Squeegee", type: "Floor care", image: "/images/products/syr-3.jpg" },
  { name: "Interchangeable Handle", type: "Handles", image: "/images/products/syr-4.jpg" },
  { name: "Ultimate Socket A", type: "Fittings", image: "/images/products/syr-5.jpg" },
  { name: "Hang-On Bucket", type: "Buckets", image: "/images/products/syr-6.jpg" },
  { name: "Long Brush", type: "Brushes", image: "/images/products/syr-7.jpg" },
  { name: "Grout Brush (soft)", type: "Brushes", image: "/images/products/syr-8.jpg" },
  { name: "Scrubbing Brush (hard)", type: "Brushes", image: "/images/products/syr-9.jpg" },
  { name: "Ultimate 1 & 3 Side Tool Kit", type: "Tool kits", image: "/images/products/syr-10.jpg" },
  { name: "Warning Sign", type: "Safety", image: "/images/products/syr-11.jpg" },
];

export const getProduct = (slug: string) => {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error("Unknown product " + slug);
  return p;
};

export const sectors = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/images/sectors/healthcare.jpg",
    short: "Hospitals, clinics and care homes.",
    text: "From large hospitals to small care homes, our system solutions keep healthcare facilities hygienic while making daily cleaning more efficient. Single-use ClaraClean® Go! textiles give every room a fresh cloth.",
  },
  {
    id: "office",
    name: "Offices & business",
    image: "/images/sectors/office.jpg",
    short: "Workplaces, lobbies and meeting rooms.",
    text: "Clean offices protect employee health and comfort, and make a strong first impression on visitors. Spray mops and dry-loaded textiles keep daily rounds quick and quiet.",
  },
  {
    id: "education",
    name: "Schools & universities",
    image: "/images/sectors/education.jpg",
    short: "Classrooms, halls and washrooms.",
    text: "Clean classrooms, halls and washrooms support a healthy learning environment for students, teachers and staff. Colour coding keeps washroom tools out of teaching areas.",
  },
  {
    id: "hospitality",
    name: "Hotels & catering",
    image: "/images/sectors/hospitality.jpg",
    short: "Guest rooms, kitchens and laundry.",
    text: "Hotels and restaurants must meet strict hygiene standards in guest areas, kitchens and laundry. HACCP-compliant textiles and modular trolleys fit housekeeping routines.",
  },
  {
    id: "retail",
    name: "Malls & shopping centres",
    image: "/images/sectors/retail.jpg",
    short: "Large, busy public floors.",
    text: "Malls and supermarkets need effective cleaning and disinfection to stay welcoming for shoppers and staff, with less water and chemicals on large floor areas.",
  },
  {
    id: "sports",
    name: "Sports facilities",
    image: "/images/sectors/sports.jpg",
    short: "Gyms, changing rooms and venues.",
    text: "Gyms, stadiums and sports venues need thorough cleaning to protect everyone who uses them, from training floors to changing rooms and equipment.",
  },
];

export const clients = [
  { name: "BSBG", logo: "/images/clients/bsbg_logo2.png" },
  { name: "Extra Mile Interiors", logo: "/images/clients/extramile_interiors_logo1.png" },
  { name: "Lambent", logo: "/images/clients/lambent_logo2.png" },
  { name: "Al Asfoor Group", logo: "/images/clients/al_asfoor_group_logo1.png" },
  { name: "The Design District", logo: "/images/clients/thedesigndistrict_logo2.png" },
  { name: "Winteriors Decors", logo: "/images/clients/winteriors_decors_llc1.png" },
  { name: "PZA Interiors", logo: "/images/clients/pza_interiors_logo1.png" },
];
