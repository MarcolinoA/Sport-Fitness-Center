import React from "react";

function RightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      version="1"
      viewBox="0 0 100 100"
      className={`${className}`}
    >
      <path
        d="M272 928c-7-7-12-19-12-27 0-9 87-102 192-208l193-193-193-193C347 201 260 108 260 99c0-19 20-39 40-39s440 420 440 440-421 440-441 440c-8 0-20-5-27-12z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export default RightIcon;