import React from 'react';

const Button = ({ text, bgColor, onClick, styles = {} }) => {
  const {
    bggColor = bgColor || '',
    textColor = 'white',
    hoverBgColor = 'white',
    hoverTextColor = 'black',
  } = styles;

  const buttonStyle = {
    backgroundColor: bggColor,
    color: textColor,
    padding: '0.5rem 1rem', // Equivalent to px-2 py-1
    borderRadius: '2px', // Equivalent to rounded-[2px]
    transition: 'background-color 0.3s ease, color 0.3s ease', // Equivalent to transition duration-300
    border: 'none',
    cursor: 'pointer',
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = hoverBgColor;
    event.target.style.color = hoverTextColor;
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = bggColor;
    event.target.style.color = textColor;
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className='h-full calibre'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default Button;