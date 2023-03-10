import { create } from "zustand";

export const useModal = create((set) => ({
    visible: false,
    darkMode: false,
    langRu: 'uz', 
    setVisible: (value) => set((state) => ({ ...state, value })),
    setDarkMode: (value) => set((state) => ({ ...state, value })),
    setLang: (value) => set((state) => ({ ...state, value })),
}))