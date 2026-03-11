"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextValue {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Restore session from localStorage on mount.
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("visiox_auth") === "true");
  }, []);

  const login = async (email: string, password: string) => {
    // ── Frontend-only mock auth ──────────────────────────────────
    // Replace with a real API call (fetch /api/auth/login) when backend is ready.
    if (email && password.length >= 6) {
      localStorage.setItem("visiox_auth", "true");
      setIsLoggedIn(true);
      router.push("/overview");
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
