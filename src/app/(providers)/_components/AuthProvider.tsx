"use client";

import { PropsWithChildren, useEffect } from "react";
import { useAuthStore } from "@/zustand/auth.store";

function AuthProvider({ children }: PropsWithChildren) {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return <>{children}</>;
}

export default AuthProvider;
