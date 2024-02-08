import React from "react";

export default function Nutrition({ title, text }) {
  return (
    <div className="flex px-8 py-4 border-b-2 last:border-0">
      <div className="w-1/2 text-dark-gray text-base font-normal">{title}</div>
      <div className="w-1/2 text-broun font-bold text-base leading-6">
        {text}
      </div>
    </div>
  );
}
