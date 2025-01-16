// 기본적인 레이아웃(전체 구조)를 잡아주는 컴포넌트
import React from "react";

function DefaultLayout({ children }) {
  return (
    <div className="w-full h-full overflow-y-scroll bg-slate-500">
      <div className="max-x-xl mx-auto min-w-[20rem]">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;