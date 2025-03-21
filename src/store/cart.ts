import {create} from 'zustand'
import axios from 'axios'

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}


interface CartStore {
  cart: CartItem[];
  error: string | null;
  loading: boolean;
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const useCartStore = create <cartType>((set) => ({
    cart: [],
    loading: true,
    addToCart: async (item) =>{
        try {
            const response = await axios.post(`http://localhost:3000/cart/addToCart/:${item.id}` , item)
            conso.log(response.data)
            set((state) => ({
                cart: cart: [...state.cart, response.data],
            }))
        } catch (error) {
            set({error: 'Failed to add to cat'})
        }
    },
}))

export default useCartStore