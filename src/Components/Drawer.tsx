import { ReactNode, useState } from 'react';
import '../styles/drawer.css'; 

interface DrawerProps {
  openFrom: 'left' | 'right' | 'top' | 'bottom';
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

function Drawer({ openFrom, isOpen, onClose, children }:DrawerProps){
  const [animationClass, setAnimationClass] = useState('');

  const closeDrawer = () => {
    setAnimationClass('slide-up');
    onClose();
    setTimeout(() => {
      onClose();
      setAnimationClass('');
    }, 300); // Assuming animation duration is 300ms
  };

  const getDrawerStyle = () => {
    switch (openFrom) {
      case 'left':
        return 'drawer-left';
      case 'right':
        return 'drawer-right';
      case 'top':
        return 'drawer-top';
      case 'bottom':
        return 'drawer-bottom';
      default:
        return '';
    }
  };

  return (
    <div className={`drawer ${getDrawerStyle()} ${isOpen ? 'open' : ''} ${animationClass}`}>
      <div className="drawer-content">
        <button className="close-btn" onClick={closeDrawer}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
