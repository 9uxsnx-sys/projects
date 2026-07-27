export type ProductDetail = {
  id: number;
  slug: string;
  name: string;
  price: string;
  description: string;
  details: string[];
  sizeFit: string;
  material: string;
  care: string;
  shipping: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
};

export const products: ProductDetail[] = [
  {
    id: 1,
    slug: "whispering-petals-wrap-midi-dress",
    name: "Whispering Petals Wrap Midi Dress",
    price: "$68.00",
    description:
      "A fluid silk-blend charmeuse midi dress with a draped wrap silhouette and softly blouson long sleeves. The self-tie waist creates a customizable fit that flatters a range of body shapes — equally elegant for luncheons, gallery openings, and evening occasions.",
    details: [
      "Wrap silhouette with interior button closure for modesty",
      "Self-tie waist sash allows adjustable fit",
      "Blouson long sleeves with elasticized cuffs",
      "Midi length falls approximately 4 inches below the knee",
      "V-neckline with draped cowl collar",
      "Fully lined bodice in lightweight cupro",
    ],
    sizeFit:
      'Model is 5\'10" (178 cm) and wears a size S. Fits true to size. The wrap design accommodates a range of bust sizes with the interior modesty button.',
    material:
      "Shell: 100% Silk Charmeuse. Lining: 100% Cupro. Thread: 100% Silk filament. Sash: Self-fabric.",
    care: "Dry clean only. Iron on low heat on the reverse side with a pressing cloth. Store hung on a padded hanger away from direct light.",
    shipping:
      "Complimentary express shipping on all orders. Delivery within 3–5 business days. Free returns within 30 days of delivery.",
    images: [
      "/assets/images/product-detail/product-1-cover.jpg",
      "/assets/images/product-detail/product-1-2.jpeg",
      "/assets/images/product-detail/product-1-3.jpeg",
      "/assets/images/product-detail/product-1-4.jpeg",
      "/assets/images/product-detail/product-1-5.jpeg",
    ],
    colors: [
      { name: "Ivory", hex: "#F5F0E8" },
      { name: "Blush", hex: "#E8C4C0" },
      { name: "Sage", hex: "#B8C4B0" },
      { name: "Navy", hex: "#284468" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    slug: "meadow-sweetheart-smocked-dress",
    name: "Meadow Sweetheart Smocked Dress",
    price: "$74.50",
    description:
      "A romantic cotton poplin dress with a sweetheart neckline and fully smocked bodice for effortless fit. The long billowy sleeves and tiered skirt create a soft, feminine volume that moves with ease — perfect for bridal showers, garden parties, and warm-weather getaways.",
    details: [
      "Sweetheart neckline with gentle pleating at bust",
      "Fully smocked bodice stretches for flexible fit across chest and ribcage",
      "Long billowy sleeves with elasticized smocked cuffs",
      "Tiered skirt with gathered seams for subtle volume",
      "Concealed side zip closure at left seam",
      "Printed all-over meadow floral in low-impact dyes",
    ],
    sizeFit:
      'Model is 5\'10" (178 cm) and wears a size S. Fits true to size. The smocked bodice accommodates a range of bust sizes comfortably with 4–5 cm of stretch.',
    material:
      "Shell: 100% Cotton Poplin. Lining: 100% Cotton Lawn. Smocking elastic: Polyester-core wrapped in cotton thread.",
    care: "Dry clean recommended. Machine wash cold on delicate, hang to dry. Iron on medium heat with steam. Do not wring or twist.",
    shipping:
      "Complimentary express shipping on all orders. Delivery within 3–5 business days. Free returns within 30 days of delivery.",
    images: [
      "/assets/images/product-detail/product-2-cover.jpg",
      "/assets/images/product-detail/product-2-2.jpeg",
      "/assets/images/product-detail/product-2-3.jpeg",
      "/assets/images/product-detail/product-2-4.jpeg",
      "/assets/images/product-detail/product-2-5.jpeg",
    ],
    colors: [
      { name: "Ivory", hex: "#F5F0E8" },
      { name: "Blush", hex: "#E8C4C0" },
      { name: "Sage", hex: "#B8C4B0" },
      { name: "Navy", hex: "#284468" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    slug: "countryside-blossom-tiered-sundress",
    name: "Countryside Blossom Tiered Sundress",
    price: "$62.00",
    description:
      "A lightweight cotton voile sundress featuring an all-over botanical print with tiered construction and adjustable spaghetti straps. The gathered waist and smocked back panel create a flexible, comfortable fit that moves naturally — equally suited for garden parties and casual summer evenings.",
    details: [
      "Gathered waist with smocked back panel for flexible fit",
      "Adjustable spaghetti straps accommodate various torso lengths",
      "Concealed side zip closure",
      "Hem falls approximately 2 inches above the knee",
      "Fully lined bodice with breathable cotton batiste",
      "Botanical print in low-impact reactive dyes (Oeko-Tex certified)",
    ],
    sizeFit:
      'Model is 5\'10" (178 cm) and wears a size S. Fits true to size. The smocked back panel offers approximately 3–4 cm of give for comfort across similar sizes.',
    material:
      "Shell: 100% Cotton Voile. Lining: 100% Cotton Batiste. Thread: 100% Organic cotton. Side-zip tape: Recycled polyester blend.",
    care: "Dry clean recommended. Machine wash cold on delicate, hang to dry. Iron on low heat with pressing cloth. See care label for full instructions.",
    shipping:
      "Complimentary express shipping on all orders. Delivery within 3–5 business days. Free returns within 30 days of delivery.",
    images: [
      "/assets/images/product-detail/product-3-cover.jpg",
      "/assets/images/product-detail/product-3-2.jpeg",
      "/assets/images/product-detail/product-3-3.jpeg",
      "/assets/images/product-detail/product-3-4.jpeg",
      "/assets/images/product-detail/product-3-5.jpeg",
    ],
    colors: [
      { name: "Ivory", hex: "#F5F0E8" },
      { name: "Blush", hex: "#E8C4C0" },
      { name: "Sage", hex: "#B8C4B0" },
      { name: "Navy", hex: "#284468" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    slug: "sun-kissed-linen-tie-front-mini",
    name: "Sun-Kissed Linen Tie-Front Mini",
    price: "$56.00",
    description:
      "A relaxed linen-cotton mini dress with a front tie detail and breezy A-line silhouette. The shirt-inspired collar and three-quarter rolled sleeves give it an effortless, polished ease — ideal for farmers' market mornings, seaside strolls, and casual al fresco dining.",
    details: [
      "Front tie closure at waist for adjustable fit",
      "Shirt-inspired point collar with button-front placket",
      "Three-quarter dolman sleeves with rolled tab detailing",
      "A-line mini silhouette with side seam pockets",
      "Relaxed fit through the body with elasticized back panel",
      "Linen-cotton jersey blend for breathability and minimal wrinkling",
    ],
    sizeFit:
      'Model is 5\'10" (178 cm) and wears a size S. Designed for a relaxed fit — we recommend taking your usual size for an easy silhouette or sizing down for a closer fit.',
    material:
      "Shell: 55% Linen, 45% Cotton. Pocket bags: 100% Cotton. Thread: Polyester-core cotton wrap. Buttons: Corozo nut.",
    care: "Machine wash cold on gentle cycle. Hang to dry. Iron on medium heat while damp. Do not bleach. Tumble dry low if needed.",
    shipping:
      "Complimentary express shipping on all orders. Delivery within 3–5 business days. Free returns within 30 days of delivery.",
    images: [
      "/assets/images/product-detail/product-4-cover.jpg",
      "/assets/images/product-detail/product-4-2.jpeg",
      "/assets/images/product-detail/product-4-3.jpeg",
      "/assets/images/product-detail/product-4-4.jpeg",
      "/assets/images/product-detail/product-4-5.jpeg",
    ],
    colors: [
      { name: "Ivory", hex: "#F5F0E8" },
      { name: "Blush", hex: "#E8C4C0" },
      { name: "Sage", hex: "#B8C4B0" },
      { name: "Navy", hex: "#284468" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductBySeasonEditId(id: number): ProductDetail | undefined {
  return products.find((p) => p.id === id);
}
