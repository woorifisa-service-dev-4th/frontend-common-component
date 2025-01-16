import React from "react";

const Form = () => {
  return (
    <form className="mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-red-300 mb-6 text-center">TODO 등록</h3>
      <form className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-2 text-lg font-medium text-white" htmlFor="title">
            TITLE
          </label>
          <input
            className="w-full p-3 border border-gray-500 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="text"
            id="title"
            placeholder="할 일을 입력하세요"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block mb-2 text-lg font-medium text-white" htmlFor="summary">
            SUMMARY
          </label>
          <textarea
            className="w-full p-3 border border-gray-500 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            id="summary"
            rows="5"
            placeholder="할 일에 대한 상세 설명을 입력하세요"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 text-lg font-medium text-white" htmlFor="category">
            CATEGORY
          </label>
          <select
            className="w-full p-3 border border-gray-500 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            id="category"
          >
            <option value="TODO">📌 TO DO</option>
            <option value="PROGRESS">▶️ ON PROGRESS</option>
            <option value="DONE">✅ DONE</option>
          </select>
        </div>

        {/* 버튼 */}
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-1 text-lg font-medium text-gray-300 bg-gray-600 rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-6 py-1 text-lg font-bold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
    </form>
  );
};

export default Form;
