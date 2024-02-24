import React, { ReactNode, forwardRef, useState } from "react";
import "../styles/drawer.css";

interface DrawerProps {
  openFrom: "left" | "right" | "top" | "bottom";
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Drawer = forwardRef(
  ({ openFrom, isOpen, onClose, children }: DrawerProps, ref) => {
    const [animationClass, setAnimationClass] = useState("");

    const closeDrawer = () => {
      setAnimationClass("slide-out-bottom");
      onClose();
      setTimeout(() => {
        setAnimationClass("");
      }, 600); // Assuming animation duration is 300ms
    };

    const getDrawerStyle = () => {
      switch (openFrom) {
        case "left":
          return "drawer-left";
        case "right":
          return "drawer-right";
        case "top":
          return "drawer-top";
        case "bottom":
          return "drawer-bottom";
        default:
          return "";
      }
    };
    React.useImperativeHandle(ref, () => ({
      closeDrawer,
    }));

    return (
      <div
        className={`drawer ${getDrawerStyle()} ${
          isOpen ? "open" : ""
        } ${animationClass}`}
      >
        <div className="drawer-content">
          <button className="close-btn" onClick={closeDrawer}>
            X
          </button>
          {children}
        </div>
      </div>
    );
  }
);

export default Drawer;
