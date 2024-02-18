import React from "react";

function LeftIcon({ className }) {
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
        d="M472 727C356 610 260 508 260 500c0-20 421-440 441-440 19 0 39 20 39 39 0 9-87 102-192 208L355 500l193 193c105 106 192 199 192 208 0 19-20 39-40 39-8 0-111-96-228-213z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export default LeftIcon;
