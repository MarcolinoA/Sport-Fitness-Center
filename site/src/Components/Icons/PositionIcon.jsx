import React from "react";

function PositionIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="40"
      version="1"
      viewBox="0 0 96 96"
      className={`${className}`}
    >
      <path
        d="M379 782c-72-37-111-93-117-166-7-81 4-118 53-191l43-65h-62c-68 0-81-8-124-81-28-47-28-74 3-104l24-25h562l24 25c31 30 31 57 3 104-38 64-58 81-97 80-28 0-42-7-59-30l-24-29h49c47 0 50-2 71-39 12-21 22-41 22-45 0-3-121-6-270-6-148 0-270 3-270 6 0 4 10 24 22 45l22 39h79c70 0 83-3 109-25 16-14 35-25 41-25 19 0 139 133 177 196 32 54 35 64 35 140 0 75-3 86-30 126-20 28-49 52-84 71-73 36-131 36-202-1zm189-59c83-61 95-149 36-250-20-34-57-81-81-105l-44-43-55 58c-118 127-137 245-52 324 12 12 34 27 48 32 37 16 117 7 148-16z"
        transform="matrix(.1 0 0 -.1 0 96)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
      <path
        d="M450 616c-28-35 11-93 48-70 35 22 22 84-18 84-10 0-23-7-30-14z"
        transform="matrix(.1 0 0 -.1 0 96)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export default PositionIcon;
