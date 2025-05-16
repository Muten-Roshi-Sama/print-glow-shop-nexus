
import { Product } from "@/types";

export const defaultProducts: Product[] = [
  {
    id: "prod-1",
    name: "Custom Phone Holder",
    description: "A stylish and functional 3D printed phone holder that can be customized to fit any phone size. Available in multiple colors.",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    categoryId: "cat-3d-prints",
    featured: true,
    stock: 25
  },
  {
    id: "prod-2",
    name: "Geometric Lamp",
    description: "Modern geometric lamp with integrated RGB LED lights. Can be controlled via remote or smartphone app.",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    categoryId: "cat-led-lights",
    featured: true,
    stock: 10
  },
  {
    id: "prod-3",
    name: "Smart Presence Detector",
    description: "Detect presence in your room with this smart sensor. Integrates with home automation systems via WiFi.",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    categoryId: "cat-detectors",
    featured: true,
    stock: 15
  },
  {
    id: "prod-4",
    name: "Essential Oil Diffuser",
    description: "A beautiful 3D printed diffuser with LED mood lighting. Perfect for any room in your home.",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    categoryId: "cat-diffusers",
    featured: true,
    stock: 20
  },
  {
    id: "prod-5",
    name: "Desk Organizer",
    description: "Keep your desk tidy with this customizable organizer. Printed with eco-friendly materials.",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    categoryId: "cat-3d-prints",
    featured: false,
    stock: 30
  },
  {
    id: "prod-6",
    name: "Smart LED Strip",
    description: "Flexible LED strip with multiple modes and colors. Can be controlled via app or voice commands.",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    categoryId: "cat-led-lights",
    featured: false,
    stock: 12
  },
  {
    id: "prod-7",
    name: "Mini Aromatherapy Diffuser",
    description: "Compact diffuser perfect for small spaces. Silent operation with automatic shut-off.",
    price: 18.99,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    categoryId: "cat-diffusers",
    featured: false,
    stock: 8
  },
  {
    id: "prod-8",
    name: "Motion Sensor",
    description: "Reliable motion detection sensor for security or automation projects. Low power consumption.",
    price: 22.99,
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    categoryId: "cat-detectors",
    featured: false,
    stock: 5
  }
];
