import { create } from 'zustand'

interface ImageStore {
    imageId: string;
    setImageId: (id: string) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
    imageId: "",
    setImageId: (id: string) => set({ imageId: id })
}))


