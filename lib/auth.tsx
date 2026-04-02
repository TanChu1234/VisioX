"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  clearAuthSession,
  hasPersistedSession,
  loginWithPassword,
  logoutFromApi,
  persistAuthSession,
} from "@/lib/api";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => hasPersistedSession());
  const router = useRouter();

  const login = async (email: string, password: string) => {
    if (!email || password.length < 6) {
      return { ok: false, error: "Invalid credentials. Use a valid username and 6+ character password." };
    }

    try {
      const session = await loginWithPassword(email, password);
      persistAuthSession(session);
      setIsLoggedIn(true);
      return { ok: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to sign in.";
      return { ok: false, error: message };
    }
  };

  const logout = () => {
    clearAuthSession();
    setIsLoggedIn(false);
    void logoutFromApi();
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
