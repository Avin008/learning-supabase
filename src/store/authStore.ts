import { createStore } from "zustand";

type AuthStoreType = {
  authStatus: boolean;
  token: string | null;
  addAuth: (token: string) => void;
  removeAuth: () => void;
};

const authStore = createStore<AuthStoreType>((set) => ({
  authStatus: false,
  token: null,
  addAuth: (token) =>
    set({ authStatus: true, token: token }),
  removeAuth: () => set({ authStatus: false, token: null }),
}));

export default authStore;
