import { create } from "zustand";

const lang = localStorage.getItem('lang')

export const useModal = create((set) => ({
    visible: false,
    darkMode: false,
    langRu: lang,
    setVisible: (value) => set((state) => ({ ...state, visible: value })),
    setDarkMode: (value) => set((state) => ({ ...state, darkMode: value })),
    setLangRu: (value) => set((state) => ({ ...state, langRu: value })),
}))