import { Product, Category } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Neo-Bot Programmable Rover',
    description: 'Learn to code with this friendly rover! Perfect for ages 6+ to understand logic and robotics basics.',
    price: 89.99,
    category: Category.EDUCATIONAL,
    image: 'https://picsum.photos/seed/toy1/500/500',
    rating: 4.8,
    reviews: 124,
    isNew: true
  },
  {
    id: '2',
    name: 'Giant T-Rex Action Figure',
    description: 'A massive 24-inch tall T-Rex with realistic roaring sounds and articulated jaws.',
    price: 45.50,
    category: Category.ACTION,
    image: 'https://picsum.photos/seed/toy2/500/500',
    rating: 4.5,
    reviews: 89
  },
  {
    id: '3',
    name: 'Starlight Dream Dollhouse',
    description: 'A 3-story wooden dollhouse with working lights and 15 pieces of furniture.',
    price: 129.00,
    category: Category.DOLLS,
    image: 'https://picsum.photos/seed/toy3/500/500',
    rating: 4.9,
    reviews: 210
  },
  {
    id: '4',
    name: 'Super Soaker Water Blaster',
    description: 'Dominate the backyard water fight with dual-stream technology. Holds 1.5L of water.',
    price: 24.99,
    category: Category.OUTDOOR,
    image: 'https://picsum.photos/seed/toy4/500/500',
    rating: 4.2,
    reviews: 56
  },
  {
    id: '5',
    name: 'Ultimate Art Easel Set',
    description: 'Double-sided easel (chalkboard and whiteboard) with paints, brushes, and paper roll included.',
    price: 65.00,
    category: Category.ARTS,
    image: 'https://picsum.photos/seed/toy5/500/500',
    rating: 4.7,
    reviews: 145
  },
  {
    id: '6',
    name: 'Galaxy 1000pc Puzzle',
    description: 'A challenging and beautiful puzzle featuring a high-res image of the Milky Way.',
    price: 18.99,
    category: Category.PUZZLES,
    image: 'https://picsum.photos/seed/toy6/500/500',
    rating: 4.6,
    reviews: 42
  },
  {
    id: '7',
    name: 'Snuggle Bear Plush XL',
    description: 'The softest, most huggable bear you will ever meet. Hypoallergenic materials.',
    price: 34.99,
    category: Category.DOLLS,
    image: 'https://picsum.photos/seed/toy7/500/500',
    rating: 5.0,
    reviews: 312,
    isNew: true
  },
  {
    id: '8',
    name: 'Speedster RC Car',
    description: 'High-speed remote control car capable of 30mph speeds and off-road stunts.',
    price: 59.99,
    category: Category.ACTION,
    image: 'https://picsum.photos/seed/toy8/500/500',
    rating: 4.4,
    reviews: 78
  },
  {
    id: '9',
    name: 'Chemistry Lab Kit',
    description: 'Safe and fun experiments for budding scientists. Includes goggles and test tubes.',
    price: 39.99,
    category: Category.EDUCATIONAL,
    image: 'https://picsum.photos/seed/toy9/500/500',
    rating: 4.7,
    reviews: 95
  }
];