import { create } from 'zustand'
import {MetaChapter} from "@/lib/api";

interface ImageStore {
    imageId: string;
    setImageId: (id: string) => void;
}

interface ChaptersStore {
    chapters: MetaChapter[],
    setChapters: (chapters: MetaChapter[]) => void;
}

interface ThemesStore {
    themes: string[],
    setThemes: (themes: string[]) => void;
}

interface MiscConfigStore {
    size: string;
    backstory: string;
    title: string;
    setSize: (size: string) => void;
    setBackstory: (backstory: string) => void;
    setTitle: (title: string) => void;
}

export interface GeneratedChapter {
    content: string;
    title: string;
}

interface GeneratedStoryStore {
    cover_art: string;
    chapters: GeneratedChapter[];
    setCoverArt: (cover_art: string) => void;
    setChapters: (chapters: GeneratedChapter[]) => void;
}

export const useGeneratedStoryStore = create<GeneratedStoryStore>((set) => ({
    cover_art: "",
    chapters: [],
    setCoverArt: (cover_art: string) => set({ cover_art }),
    setChapters: (chapters: GeneratedChapter[]) => set({ chapters })
}))

export const useMiscConfigStore = create<MiscConfigStore>((set) => ({
    size: "medium",
    backstory: "",
    title: "",
    setSize: (size: string) => set({ size }),
    setBackstory: (backstory: string) => set({ backstory }),
    setTitle: (title: string) => set({ title })
}))

export const useThemesStore = create<ThemesStore>((set) => ({
    themes: [],
    setThemes: (themes: string[]) => set({ themes })
}))

export const useImageStore = create<ImageStore>((set) => ({
    imageId: "",
    setImageId: (id: string) => set({ imageId: id })
}))

export const useChaptersStore = create<ChaptersStore>((set) => ({
    chapters: [],
    setChapters: (chapters: MetaChapter[]) => set({ chapters })
}))


