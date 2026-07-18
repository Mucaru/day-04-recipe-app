"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

interface ToastData {
  message: string;
  type: "success" | "info";
  id: number;
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "info") => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

function ToastItem({ message, type, onClose }: ToastData & { onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`flex items-center gap-2 px-5 py-3 rounded-2xl shadow-xl text-white text-sm font-medium whitespace-nowrap pointer-events-none ${
        type === "success" ? "bg-gray-900" : "bg-orange-500"
      }`}
      style={{
        animation: "toastSlideUp 0.25s ease-out forwards",
      }}
    >
      {message}
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastData | null>(null);
  const idRef = useRef(0);

  const showToast = useCallback((message: string, type: "success" | "info" = "success") => {
    idRef.current += 1;
    setToast({ message, type, id: idRef.current });
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Portal-style fixed container */}
      <div
        style={{
          position: "fixed",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        {toast && (
          <ToastItem
            key={toast.id}
            {...toast}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}