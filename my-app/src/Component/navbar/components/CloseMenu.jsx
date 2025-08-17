import React from "react";


export default function CloseMenu({ isOpen, closeMenu } ) {

  return (
    <div
      className={`menu-overlay ${isOpen ? "open" : ""}`}
      onClick={closeMenu}
    />
  );
}
