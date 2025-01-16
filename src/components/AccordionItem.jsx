import React from "react";
import { useAccordionContext } from "../contexts/AccordionContext";

const AccordionItem = ({ id, title, className, children }) => {

    const { openItemId,toggleItem } = useAccordionContext();

    const isOpen = openItemId ===id; // 항목이 열려있는지 확인
    return (
        <li className="accordion-item">
          <div
            className="accordion-title cursor-pointer flex justify-between items-center"
            onClick={() => toggleItem(id)}
          >
            <h3 className="text-lg font-bold">{title}</h3>
            <span>{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && <div className="accordion-content mt-2">{children}</div>}
        </li>
      );
    };
export default AccordionItem;