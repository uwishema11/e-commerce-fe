import {create} from 'zustand'
import axios from "axios";

import ProductProps from "@/types/productType";


interface ProductStore {
  products: ProductType[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (id: string, updatedData: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>
}

const useProductStore = create <ProductStore> ((set) => ({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async () => {
        set({loading: true, error: null})
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            set({loading: false, products: response.data})
        } catch (error) {
            set({loading: false, error: 'Failed to fetch products'})
        }
    },
    addProduct: async (item) => {
        set({loading: true, error: null})
        try {
            const response = await axios.post('https://fakestoreapi.com/products')
            set((state) => ({
                products: [...state.products, response.data]
            }))
        } catch (error) {
            set({loading: false, error: 'Failed to fetch products'})
        }
    },

    updateProduct : async (id, updatedData) => {
        try {
            const response = await axios.put('https://fakestoreapi.com/products')
            set((state) => ({
                products: state.products.map((product) =>
                    product.id === id ? {...product, ...response.data}: product
                )
            }))
        } catch (error) {
            set({loading: false, error: 'Failed to fetch products'})  
        }
    },
    deleteProduct: async(id) => {
        try {
            await axios.delete("https://fakestoreapi.com/products")
            set((state) => ({
                products: state.products.filter((item) => item.id !==id)
            }))
        } catch (error) {
            set({loading: false, error: 'Failed to fetch products'})  
        }
    }
}))

export default useProductStore