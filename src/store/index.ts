import { create } from "zustand";
interface TopicState {
  topic: string;
  updateTopic: (newTopic: string) => void;
}

const useStore = create<TopicState>()((set) => ({
  topic: "yourself",
  updateTopic: (newTopic) => set(() => ({ topic: newTopic })),
}));

export default useStore;
