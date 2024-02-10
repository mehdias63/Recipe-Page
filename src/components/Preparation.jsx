import React from "react";

export default function Preparation({ lable, text }) {
  return (
    <ul>
      <li className="text-base text-dark-gray font-normal marker:text-purple mt-2">
        <span className="text-base font-bold text-dark-gray">{lable}: </span>
        {text}
      </li>
    </ul>
  );
}
