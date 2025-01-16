import React, { useEffect, useRef } from "react";

const WelcomeTooltip = ({ closeTooltip }) => {
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        closeTooltip();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [tooltipRef, closeTooltip]);

  return (
    <div className="z-50 bg-slate-600 p-6 rounded-2xl" ref={tooltipRef}>
      <h3 className="text-4xl text-red-200 text-center mb-10">WELCOME 👋🏻</h3>
      <form className="my-2 place-items-center">
        <div className="text-xl text-white text-center leading-10">
          <p>1. ADD TODO 버튼을 클릭하여 새로운 할 일을 등록할 수 있습니다.</p>
          <p>2. ✏️ 버튼을 클릭하여 TODO를 수정하거나, 🗑 버튼을 클릭하여 TODO를 삭제할 수 있습니다.</p>
          <p>3. 할 일 목록을 필터링하여 볼 수 있습니다.</p>
        </div>

        <div>
          <button className="text-2xl text-white mt-10 hover:text-slate-500 " onClick={closeTooltip}>
            시작하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default WelcomeTooltip;
