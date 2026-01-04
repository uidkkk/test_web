export enum Category {
  EDUCATIONAL = 'Educational',
  ACTION = 'Action Figures',
  DOLLS = 'Dolls & Plush',
  OUTDOOR = 'Outdoor Fun',
  ARTS = 'Arts & Crafts',
  PUZZLES = 'Puzzles'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  email: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
