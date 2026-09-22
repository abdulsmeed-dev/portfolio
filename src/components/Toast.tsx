"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircleIcon } from "./Icons";

interface ToastContextType {
  showToast: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; id: number } | null>(null);

  const showToast = useCallback((message: string, duration = 2800) => {
    const id = Date.now();
    setToast({ message, id });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 22px",
            borderRadius: "9999px",
            background: "rgba(10, 16, 36, 0.95)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(99, 102, 241, 0.35)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.25)",
            color: "#ffffff",
            fontSize: "0.86rem",
            fontWeight: 600,
            animation: "toastPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: "none"
          }}
        >
          <CheckCircleIcon size={18} color="#10b981" />
          <span>{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      showToast: (msg: string) => {
        if (typeof window !== "undefined") {
          console.log("[Toast]", msg);
        }
      }
    };
  }
  return context;
}
