import React from "react";

export default function Instructions({ title, text, id }) {
  return (
    <div className="flex gap-4 mb-2 last:mb-8">
      <p className="text-broun">{id}. </p>
      <p className="text-dark-gray leading-6">
        <span className="font-bold"> {title}: </span>
        {text}
      </p>
    </div>
  );
}
