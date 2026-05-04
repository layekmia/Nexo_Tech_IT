export type Product = {
  id: string;
  category: string;
  categoryStyles: string;
  title: string;
  description: string;
  features: string[];
  link: string;
  image?: string;
};

export const productsData: Product[] = [
  {
    id: "school-management",
    category: "School Administration",
    categoryStyles: "bg-blue-100 text-blue-700",
    title: "School Management System",
    description: "A centralized digital solution that streamlines student enrollment, class management, attendance tracking, exam results, and administrative tasks with secure role-based access control.",
    features: [
      "Student & Teacher Management",
      "Attendance & Timetable System",
      "Fee Collection & Invoicing",
      "Exam & Grade Management",
      "Parent Communication Portal",
      "Reports & Analytics Dashboard",
    ],
    link: "/contact",
    image: "/products/school_MS.png",
  },
  {
    id: "lms",
    category: "Online Education",
    categoryStyles: "bg-purple-100 text-purple-700",
    title: "Learning Management System (LMS)",
    description: "Build, market, and sell online courses, memberships, and digital products from a single platform. Deliver engaging learning experiences with video lessons, quizzes, Pdf document,  and automated certificates. Perfect for educators, coaches, and training companies worldwide.",
    features: [
      "Course Creation & Management",
      "Video Lessons & Pdf document",
      "Student Progress Tracking",
      "Automated Certificates",
      "Built-in Payment Gateway",
      "Mobile-Friendly Learning App",
    ],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "ecommerce",
    category: "Online Commerce",
    categoryStyles: "bg-green-100 text-green-700",
    title: "E-Commerce Platform",
    description: "Launch your complete online store and start selling globally within days. Manage products, process payments, track orders, and grow your business with powerful built-in analytics. Designed for retailers and brands in USA, UK, and Europe.",
    features: [
      "Product & Inventory Management",
      "Secure Multi-Currency Payments",
      "Order Tracking & Management",
      "Sales Analytics Dashboard",
      "Discount & Coupon System",
      "Mobile-Optimized Storefront",
    ],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "inventory",
    category: "Business Operations",
    categoryStyles: "bg-orange-100 text-orange-700",
    title: "Inventory Management System",
    description: "Take complete control of your stock, suppliers, and supply chain with our smart inventory platform. Get real-time stock alerts, manage multiple locations, track purchase orders, and make data-driven decisions with powerful reporting tools.",
    features: [
      "Real-Time Stock Tracking",
      "Multi-Location Management",
      "Supplier & Purchase Orders",
      "Low Stock Alerts",
      "Barcode Scanning Support",
      "Detailed Reports & Analytics",
    ],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
  },
];
