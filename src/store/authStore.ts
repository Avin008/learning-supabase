import { create } from "zustand";

type AuthStoreType = {
  authStatus: boolean;
  token: string;
  addAuth: (token: string) => void;
  removeAuth: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  authStatus: false,
  token: "",
  addAuth: (token) =>
    set({ authStatus: true, token: token }),
  removeAuth: () => set({ authStatus: false, token: "" }),
}));

export default useAuthStore;
