import React from "react";

export default function Nutrition({ title, text }) {
  return (
    <div className="flex gap-6">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}
