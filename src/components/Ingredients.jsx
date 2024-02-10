import React from "react";

export default function Ingredients({ text }) {
  return (
    <ul>
      <li className="mt-2 marker:text-purple text-dark-gray ">{text}</li>
    </ul>
  );
}
