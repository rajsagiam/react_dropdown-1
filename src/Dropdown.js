import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file for styling

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleButtonHover = () => {
    setIsOpen(true);
  };
  
  const handleButtonLeave = () => {
   // setIsOpen(false);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={handleButtonClick}
      
  onMouseEnter={handleButtonHover}
  onMouseLeave={handleButtonLeave}>
        {selectedItem ? selectedItem : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)} >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
