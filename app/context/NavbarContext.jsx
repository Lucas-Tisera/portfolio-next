'use client';
import { useState, createContext } from "react";
const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
    const [section, setSection] = useState("#home");
    return (
        <NavbarContext.Provider value={{ section, setSection }}>
            {children}
        </NavbarContext.Provider>
    );
}
export default NavbarContext;