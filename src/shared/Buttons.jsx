import React from 'react';

function Buttons({
  children,
  buttonType = 'button', 
  className = '', 
  icon = null,
  onClick 
}) {
  return (
    <button 
      type={buttonType} 
      className={`flex items-center justify-center pt-3 pb-3 pl-5 pr-5 rounded-[100px] cursor-pointer ${className} h-auto`} 
      onClick={onClick}
    >
      {icon && <span className="mr-3">{icon}</span>} {/* Optional spacing between icon and text */}
      {children}
    </button>
  );
}

export default Buttons;
