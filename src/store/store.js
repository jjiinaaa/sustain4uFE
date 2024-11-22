import { create } from "zustand";

const useStore = create((set) => ({
  user: { name: "", age: null, email: "" },
  settings: { theme: "light", language: "en" },
  data: {},

  // 상태를 업데이트하는 함수들
  setUser: (newUser) =>
    set((state) => ({ user: { ...state.user, ...newUser } })),
  setSettings: (newSettings) =>
    set((state) => ({ settings: { ...state.settings, ...newSettings } })),
  setData: (key, value) =>
    set((state) => ({ data: { ...state.data, [key]: value } })),
  resetStore: () =>
    set({
      user: { name: "", age: null, email: "" },
      settings: { theme: "light", language: "en" },
      data: {},
    }),
}));
export default useStore;
