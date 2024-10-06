import { create } from "zustand";
import { supabase } from "@/supabase/supabase.client";

type AuthStoreState = {
  isAuthInitialized: boolean;
  initializeAuth: () => Promise<void>;

  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => Promise<void>;
};

export const useAuthStore = create<AuthStoreState>((set) => ({
  isAuthInitialized: false,
  initializeAuth: async () => {
    set({ isAuthInitialized: false });
    const { data } = await supabase.auth.getSession();
    set({ isLoggedIn: !!data.session?.user, isAuthInitialized: true });
  },

  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
  logOut: async () => {
    await supabase.auth.signOut();
    set({ isLoggedIn: false });
  },
}));
