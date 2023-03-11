import { create } from "zustand";

export const useModal = create((set) => ({
    visible: false,
    darkMode: false,
    langRu: "uz",
    setVisible: (value) => set((state) => ({ ...state, visible: value })),
    setDarkMode: (value) => set((state) => ({ ...state, darkMode: value })),
    setLangRu: (value) => set((state) => ({ ...state, langRu: value })),
}))