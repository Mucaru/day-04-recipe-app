"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "info";
  onClose: () => void;
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
    style={{ left: "50%", transform: "translateX(-50%)" }}
    className={`fixed bottom-20 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl shadow-lg text-white text-sm font-medium animate-fade-in whitespace-nowrap ${
        type === "success" ? "bg-gray-900" : "bg-orange-500"
    }`}
    >
    {message}
    </div>
  );
}

// Toast manager — simpan di context
import { createContext, useCallback, useContext, useRef } from "react";

interface ToastContextType {
  showToast: (message: string, type?: "success" | "info") => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);
  const idRef = useRef(0);

  const showToast = useCallback((message: string, type: "success" | "info" = "success") => {
    idRef.current += 1;
    setToast({ message, type });
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          key={idRef.current}
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}