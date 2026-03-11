"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check local storage for existing session
    const auth = localStorage.getItem("visiox_auth");
    if (auth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulated login - in a real app, this would be a fetch to /api/auth/login
    if (email && password.length >= 6) {
      localStorage.setItem("visiox_auth", "true");
      setIsLoggedIn(true);
      return { ok: true };
    }
    return { ok: false, error: "Invalid credentials. Use any email + 6+ char password." };
  };

  const logout = () => {
    localStorage.removeItem("visiox_auth");
    setIsLoggedIn(false);
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
