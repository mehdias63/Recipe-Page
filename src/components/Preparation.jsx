import React from "react";

export default function Preparation({ lable, text }) {
  return (
    <li>
      <span>{lable}: </span>
      {text}
    </li>
  );
}
