"use client";
import { useState, createContext, ReactNode } from "react";

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export default function Context({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
