import { create } from "zustand";

interface MacbookStore {
  color: string;
  scale: number;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;

  texture: string;
  setTexture: (texture: string) => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#2e2c2e",
  scale: 0.08,
  setColor: (color: string) => set({ color }),
  setScale: (scale: number) => set({ scale }),
  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacbookStore;
