import React from "react";

function MenuIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      fill="none"
      className={`${className}`}
    >
      <path
        strokeMiterlimit="10"
        d="M5 8a2 2 0 100 4h40a2 2 0 100-4zm0 15a2 2 0 100 4h40a2 2 0 100-4zm0 15a2 2 0 100 4h40a2 2 0 100-4z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.12)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export default MenuIcon;