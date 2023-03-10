import { create } from "zustand";

export const useModal = create((set) => ({
    visible: false,
    setVisible: (value) => set((state) => ({ visible: value }))
}))