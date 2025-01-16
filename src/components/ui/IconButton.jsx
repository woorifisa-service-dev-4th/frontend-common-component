import React from "react";

function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick} className="w-8 text-xl font-semibold cursor-pointer">
      {icon}
    </button>
  );
}

export default IconButton;
