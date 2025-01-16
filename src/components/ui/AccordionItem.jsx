import React from "react";
import { useAccordionContext } from "../../contexts/AccordionContext";

const TODO_CATEGORY_ICON = {
  TODO: "📝",
  PROGRESS: "⏳",
  DONE: "✅",
};

const AccordionItem = ({ id, title, category, children }) => {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id; // 항목이 열려있는지 확인

  return (
    <li className="flex flex-col my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
      <div
        className="cursor-pointer flex justify-between items-center  w-full"
        onClick={() => toggleItem(id)}
      >
        <div className="flex items-center gap-2">
          {/* 카테고리 아이콘 */}
          <span className="text-lg">{TODO_CATEGORY_ICON[category]}</span>
          <h3 className="text-lg font-bold  text-gray-100">{title}</h3>
        </div>
        {/* 토글 */}
        <span className="text-lg font-bold  text-gray-100">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* 내용 */}
      {isOpen && <div className="accordion-content mt-2  text-gray-100">{children}</div>}
    </li>
  );
};
export default AccordionItem;
