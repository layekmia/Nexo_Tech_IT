export type Product = {
  id: string;
  logoText: string;
  logoIconColor: string; 
  title: string;
  description: string;
  link: string;
  image: string;
  bgColor: string;
  btnColor: string;
  btnHoverColor: string;
};

export const productsData: Product[] = [
  {
    id: "lms",
    logoText: "eduflow",
    logoIconColor: "bg-[#5f5cf3]", // purple
    title: "The All-in-one Learning Management System",
    description: "Build, market, and sell online courses, memberships, communities, coaching, and digital products from a single platform.",
    link: "https://eduflow.nexotechit.com/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2400&auto=format&fit=crop", // Placeholder
    bgColor: "bg-[#e0dffe]",
    btnColor: "bg-[#5f5cf3]",
    btnHoverColor: "hover:bg-[#4b48d6]",
  },
  {
    id: "school-management",
    logoText: "smartschool",
    logoIconColor: "bg-[#0ea5e9]", // light blue
    title: "Complete School Administration Portal",
    description: "A centralized digital solution that streamlines student enrollment, class management, attendance tracking, and administrative tasks.",
    link: "https://smartschool1.vercel.app/",
    image: "/products/school_MS.png",
    bgColor: "bg-[#e0f2fe]",
    btnColor: "bg-[#0ea5e9]",
    btnHoverColor: "hover:bg-[#0284c7]",
  },
  {
    id: "shopcart",
    logoText: "shopcart",
    logoIconColor: "bg-[#10b981]", // emerald
    title: "Powerful E-Commerce Shopping Platform",
    description: "Launch your multi-vendor marketplace or single-store brand with advanced product tracking, payment gateways, and order management.",
    link: "https://shopcart.nexotechit.com/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2400&auto=format&fit=crop", // Placeholder
    bgColor: "bg-[#dcfce7]",
    btnColor: "bg-[#10b981]",
    btnHoverColor: "hover:bg-[#059669]",
  },
  {
    id: "softora",
    logoText: "softora",
    logoIconColor: "bg-[#6366f1]", // indigo
    title: "Smart Inventory & POS System",
    description: "Automate your stock management, track multi-warehouse inventory, and handle retail checkout smoothly with our POS integration.",
    link: "https://smartsolutation2.vercel.app/",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2400&auto=format&fit=crop", // Placeholder
    bgColor: "bg-[#e0e7ff]",
    btnColor: "bg-[#6366f1]",
    btnHoverColor: "hover:bg-[#4f46e5]",
  },
  {
    id: "natours",
    logoText: "natours",
    logoIconColor: "bg-[#f59e0b]", // amber
    title: "Travel & Tour Booking Engine",
    description: "Allow customers to discover exciting travel packages, book their trips online, and manage their itineraries seamlessly.",
    link: "https://natours.nexotechit.com/",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2400&auto=format&fit=crop", // Placeholder
    bgColor: "bg-[#fef3c7]",
    btnColor: "bg-[#f59e0b]",
    btnHoverColor: "hover:bg-[#d97706]",
  },
  {
    id: "wildoasis",
    logoText: "wildoasis",
    logoIconColor: "bg-[#f43f5e]", // rose
    title: "Hotel & Cabin Reservation Management",
    description: "Take control of your hotel bookings with a visual calendar, room management, and a beautiful front-end experience for guests.",
    link: "https://wildoasis.nexotechit.com/",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2400&auto=format&fit=crop", // Placeholder
    bgColor: "bg-[#ffe4e6]",
    btnColor: "bg-[#f43f5e]",
    btnHoverColor: "hover:bg-[#e11d48]",
  }
];
