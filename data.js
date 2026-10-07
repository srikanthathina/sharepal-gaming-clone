const products = [
  {
    id: 1,
    name: "PS5 + Games (100+) + 1 Controller",
    category: "PS5",
    badge: "Trending",
    booked: "394 booked this month",
    rating: "4.5",
    description: "PS Plus Deluxe subscription included with a large game library for solo play.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fps5%2Fps5-with-100-games-with-1-controller%2Fps5-with-100-games-with-1-controller-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 2,
    name: "PS5 All in one Combo + 2 Controllers",
    category: "PS5",
    badge: "Trending",
    booked: "394 booked this month",
    rating: "4.8",
    description: "A multiplayer-ready PS5 package with subscription games and EA Play access.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fps5%2Fps5-with-ea-play-with-100-games-with-2-controllers%2Fps5-with-2-controllers-with-ea-play-with-ps-plus-deluxe-subscription-combo-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 3,
    name: "Oculus Quest 3S",
    category: "VR",
    badge: "Trending",
    booked: "248 booked this month",
    rating: "4.8",
    description: "Standalone VR headset for immersive gaming, fitness, and entertainment nights.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Faudio-visual-equipment%2Fvr%2Foculus-quest-3s%2Foculus-quest-3s-on-rent-1.webp&w=640&q=75"
  },
  {
    id: 4,
    name: "PS5 + Games (100+) + 2 Controllers",
    category: "PS5",
    badge: "Trending",
    booked: "223 booked this month",
    rating: "4.6",
    description: "Two-controller bundle with access to more than 100 titles through PS Plus.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fps5%2Fps5-with-100-games-with-2-controllers%2Fps5-with-100-games-with-2-controllers-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 5,
    name: "Oculus Quest 2",
    category: "VR",
    badge: "Trending",
    booked: "184 booked this month",
    rating: "4.7",
    description: "Wireless VR headset with controllers, ideal for parties and first-time VR sessions.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fvr%2Foculus-quest-2%2Foculus-ques-2-on-rent-sharepal-2.webp&w=640&q=75"
  },
  {
    id: 6,
    name: "FC25 + 2 Controllers Combo",
    category: "PS5",
    badge: "Trending",
    booked: "141 booked this month",
    rating: "4.8",
    description: "Football night bundle with FC25 and two controllers for couch multiplayer.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fps5%2Fps5-with-fc25%2Fps5-with-fc25-with-100-games-with-2-controllerS-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 7,
    name: "PS5 + 1 Controller (Disc or Digital)",
    category: "PS5",
    badge: "",
    booked: "227 booked this month",
    rating: "4.8",
    description: "Clean PS5 console rental with one controller and no bundled games included.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fps5%2Fps5-with-1-controller%2Fps5-console-with-1-controller-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 8,
    name: "PS5 + GTA 6 with 1 Controller",
    category: "GTA VI",
    badge: "New",
    booked: "Unavailable for these dates",
    rating: "4.9",
    description: "Upcoming GTA VI package styled as a high-demand availability card.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fps5%2Fps5-with-1-controller-gta-6%2Fps5-with-gta-6-with-1-controller-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 9,
    name: "Xbox Series S (400+ Games) w/1 Controller",
    category: "Xbox",
    badge: "",
    booked: "162 booked this month",
    rating: "4.7",
    description: "Compact Xbox Series S rental with Game Pass-style catalog access.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fxbox%2Fxbox-400-games-1-controller%2Fxbox-series-s-with-one-controllers-400-games-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 10,
    name: "Xbox Series S (200+ Games) w/2 Controllers",
    category: "Xbox",
    badge: "",
    booked: "153 booked this month",
    rating: "4.8",
    description: "Two-controller Xbox package for co-op and family gaming sessions.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fxbox%2Fxbox-400-games-2-controller%2Fxbox-series-s-with-2-controllers-400-games-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 11,
    name: "PS5 + EA Play + 2 Controllers",
    category: "PS5",
    badge: "",
    booked: "126 booked this month",
    rating: "4.5",
    description: "Sports and racing friendly PS5 bundle with EA Play access and two controllers.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Fgaming-consoles%2Fps5%2Fps5-with-ea-play-combo-with-2-controllers%2Fps5-ea-play-combo-with-2-controllers-on-rent-sharepal-1.webp&w=640&q=75"
  },
  {
    id: 12,
    name: "Sony PlayStation PS VR2",
    category: "VR",
    badge: "New",
    booked: "Unavailable for these dates",
    rating: "4.8",
    description: "PlayStation VR2 headset package for premium console VR experiences.",
    image: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fcategories%2Faudio-visual-equipment%2Fvr%2Fsony-ps-vr-2%2Fsony-ps-vr2-on-rent-sharepal-1.webp&w=640&q=75"
  }
];

const priceMap = {
  1: 599,
  2: 799,
  3: 899,
  4: 899,
  5: 699,
  6: 749,
  7: 499,
  8: 1199,
  9: 449,
  10: 549,
  11: 699,
  12: 1199
};

products.forEach((product) => {
  product.price = priceMap[product.id];
});

function svgProduct(label, colorA, colorB) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${colorA}"/>
          <stop offset="1" stop-color="${colorB}"/>
        </linearGradient>
      </defs>
      <rect width="420" height="420" rx="46" fill="#f8fafc"/>
      <circle cx="316" cy="104" r="72" fill="url(#g)" opacity=".18"/>
      <circle cx="104" cy="306" r="86" fill="url(#g)" opacity=".12"/>
      <rect x="118" y="96" width="184" height="228" rx="32" fill="white" stroke="#e2e8f0" stroke-width="7"/>
      <rect x="146" y="128" width="128" height="130" rx="18" fill="url(#g)" opacity=".92"/>
      <rect x="152" y="278" width="116" height="18" rx="9" fill="#dbeafe"/>
      <text x="210" y="362" text-anchor="middle" font-family="Inter,Arial" font-size="28" font-weight="800" fill="#0f172a">${label}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const outdoorProducts = [
  {
    id: 101,
    name: "Trekking Shoes + Poles Combo",
    category: "Trekking",
    badge: "Trending",
    booked: "312 booked this month",
    rating: "4.7",
    price: 249,
    description: "Trail-ready shoes and trekking poles for weekend hikes around Bangalore.",
    image: svgProduct("Trekking Kit", "#16a34a", "#0ea5e9")
  },
  {
    id: 102,
    name: "Camping Tent for 2 People",
    category: "Camping",
    badge: "Popular",
    booked: "208 booked this month",
    rating: "4.6",
    price: 399,
    description: "Compact two-person tent with easy setup for campsites and short getaways.",
    image: svgProduct("Tent", "#65a30d", "#f59e0b")
  },
  {
    id: 103,
    name: "Riding Jacket + Helmet",
    category: "Riding",
    badge: "Trending",
    booked: "186 booked this month",
    rating: "4.8",
    price: 349,
    description: "Protective riding gear bundle for highway trips and city rides.",
    image: svgProduct("Riding Gear", "#dc2626", "#334155")
  },
  {
    id: 104,
    name: "Rucksack 60L",
    category: "Trekking",
    badge: "",
    booked: "157 booked this month",
    rating: "4.5",
    price: 179,
    description: "Large travel rucksack with rain cover and ergonomic support.",
    image: svgProduct("Rucksack", "#0891b2", "#4f46e5")
  }
];

const entertainmentProducts = [
  {
    id: 201,
    name: "Projector + Screen Combo",
    category: "Projector",
    badge: "Trending",
    booked: "276 booked this month",
    rating: "4.7",
    price: 699,
    description: "Home theatre projector package for movie nights, matches, and events.",
    image: svgProduct("Projector", "#7c3aed", "#2563eb")
  },
  {
    id: 202,
    name: "Party Speaker with Mic",
    category: "Speaker",
    badge: "Popular",
    booked: "231 booked this month",
    rating: "4.6",
    price: 499,
    description: "Portable speaker system with microphone for parties and gatherings.",
    image: svgProduct("Speaker", "#db2777", "#f97316")
  },
  {
    id: 203,
    name: "Karaoke Night Bundle",
    category: "Speaker",
    badge: "New",
    booked: "124 booked this month",
    rating: "4.5",
    price: 599,
    description: "Karaoke-ready audio bundle with mics, speaker, and easy plug-in setup.",
    image: svgProduct("Karaoke", "#9333ea", "#06b6d4")
  },
  {
    id: 204,
    name: "Big Screen Gaming Projector",
    category: "Projector",
    badge: "Trending",
    booked: "168 booked this month",
    rating: "4.8",
    price: 799,
    description: "Low-latency projector pick for console gaming on a larger screen.",
    image: svgProduct("Big Screen", "#2563eb", "#22c55e")
  }
];

const sections = {
  gaming: {
    label: "Gaming",
    title: "Gaming Consoles",
    catalogTitle: "Gaming Gadgets On Rent",
    countLabel: "50 items",
    eyebrow: "Zero deposit rentals",
    description: "Rent the latest gaming gadgets from SharePal PS5, Xbox, Oculus VR, Racing Wheel on rent.",
    heroImage: "https://sharepal.in/_next/image?url=https%3A%2F%2Fimages.sharepal.in%2Fsuper-categories%2Fgaming-right.webp&w=640&q=75",
    heroAlt: "Gaming console and VR headset",
    categories: ["All", "GTA VI", "PS5", "Xbox", "VR"],
    products
  },
  outdoor: {
    label: "Outdoor",
    title: "Outdoor Gear",
    catalogTitle: "Outdoor Gear On Rent",
    countLabel: "32 items",
    eyebrow: "Travel smarter",
    description: "Rent trekking, camping, and riding essentials from SharePal with doorstep delivery.",
    heroImage: svgProduct("Outdoor", "#16a34a", "#0ea5e9"),
    heroAlt: "Outdoor rental gear",
    categories: ["All", "Trekking", "Camping", "Riding"],
    products: outdoorProducts
  },
  entertainment: {
    label: "Entertainment",
    title: "Entertainment Gear",
    catalogTitle: "Entertainment On Rent",
    countLabel: "28 items",
    eyebrow: "Party and movie rentals",
    description: "Rent projectors, speakers, screens, and big-screen gaming gear for events at home.",
    heroImage: svgProduct("Entertainment", "#7c3aed", "#f97316"),
    heroAlt: "Entertainment rental gear",
    categories: ["All", "Projector", "Speaker"],
    products: entertainmentProducts
  }
};

const faqs = [
  ["How can I rent from SharePal?", "Select your rental dates, choose a product, complete verification, and SharePal handles delivery and pickup."],
  ["If I rent multiple products, do I need to extend all?", "You can manage products separately when the order allows it, so extensions can be partial or complete based on availability."],
  ["When does the rental start?", "The usable rental period starts after delivery. Delivery and pickup windows are shown during date selection."],
  ["What will be the condition of the products?", "Products are cleaned, checked, and packed before dispatch so they arrive ready to use."],
  ["Why is verification required?", "Verification keeps zero-deposit rentals secure and helps protect both customers and rental inventory."]
];

const reviews = [
  ["SB", "Satyaki", "Kolkata • Trekking Gear", "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy."],
  ["AS", "Afrana", "Bangalore • Gaming Console", "Have used their services twice now. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4."],
  ["AA", "Amal", "Bangalore • Gaming Console", "I am a regular customer and order PS4. It is affordable, booking is super easy, and the website and team are user friendly."],
  ["PS", "Pankaj", "Mumbai • Action Cameras", "The experience with SharePal is awesome. The camera and service provided by them were good. Overall I am happy renting gear from SharePal."]
];
