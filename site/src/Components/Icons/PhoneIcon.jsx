import React from "react";

function PhoneIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="40"
      version="1"
      viewBox="0 0 100 110"
      className={`${className}`}
    >
      <path
        d="M185 921C134 890 60 804 60 775c0-49 42-151 98-235 73-112 270-309 382-382 84-56 186-98 235-98 29 0 127 86 151 132 27 53 20 63-91 138-57 38-112 70-122 70s-40-11-66-26c-26-14-56-23-66-19-22 7-231 218-231 234 0 6 11 34 25 61s25 56 25 65-32 63-70 120c-77 114-88 121-145 86zm115-111c33-49 60-93 60-98s-14-34-31-66c-30-55-30-57-13-84 22-35 211-224 246-246 27-17 29-17 84 13 32 17 61 31 66 31 14 0 188-119 188-129 0-14-71-99-97-116-73-48-261 62-463 272C182 550 86 712 104 784c6 23 107 116 127 116 5 0 36-40 69-90z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export default PhoneIcon;