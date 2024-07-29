import { createContext, useContext, useState } from "react";


export const MenuContext = createContext();

export const useMenuContext = () => {
    return useContext(MenuContext);
}

export const MenuContextProvider = ({ children }) => {
    const [menuItem, setMenuItem] = useState("about");
    return <MenuContext.Provider value={{ menuItem, setMenuItem }}>
        {children}
    </MenuContext.Provider>
};
