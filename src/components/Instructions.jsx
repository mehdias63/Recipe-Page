import React from "react";

export default function Instructions({ title, text, id }) {
  return (
    <div className="flex gap-1">
      <span>{id}.</span>
      <h1>{title}:</h1>
      <p> {text}</p>
    </div>
  );
}
