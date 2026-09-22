"use client";

import React from "react";
import { ToastProvider } from "./Toast";
import { QuickDock } from "./QuickDock";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {children}
      <QuickDock />
    </ToastProvider>
  );
}
