import React, { useState } from 'react';
import { AccordionContext } from '@/contexts/AccordionContext';

const Accordion = ({ children }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <AccordionContext.Provider value={{ openItemId, toggleItem }}>
      <div className="accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;