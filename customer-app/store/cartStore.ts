import { create } from 'zustand';

type CartItem = { id: number; name: string; price: number; quantity: number };

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem,'quantity'>) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => set((state) => {
    const existing = state.items.find(i => i.id === item.id);
    if (existing) return { items: state.items.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i) };
    return { items: [...state.items, {...item, quantity: 1}] };
  }),
  removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
  increaseQuantity: (id) => set((state) => ({ items: state.items.map(i => i.id === id ? {...i, quantity: i.quantity + 1} : i) })),
  decreaseQuantity: (id) => set((state) => ({ items: state.items.map(i => i.id === id && i.quantity > 1 ? {...i, quantity: i.quantity - 1} : i).filter(i => i.quantity > 0) })),
  clearCart: () => set({ items: [] }),
  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  totalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));
