import { useState } from "react";



const useMenuToggle = (initial = false) => {
   const [isOpen, setIsOpen] = useState(initial);

   const toggleMenu = () => setIsOpen(prev => !prev);
   const closeMenu = () => setIsOpen(false);
   const openMenu = () => setIsOpen(true);

   return { isOpen, toggleMenu, closeMenu, openMenu };
}

export default useMenuToggle;