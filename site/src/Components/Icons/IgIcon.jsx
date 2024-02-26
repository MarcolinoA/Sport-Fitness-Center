import React from "react";

function IgIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 48 48"
      className={`${className}`}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M15 4C8.937 4 4 8.937 4 15v18c0 6.063 4.937 11 11 11h18c6.063 0 11-4.937 11-11V15c0-6.063-4.937-11-11-11H15zm0 2h18c4.983 0 9 4.017 9 9v18c0 4.983-4.017 9-9 9H15c-4.983 0-9-4.017-9-9V15c0-4.983 4.017-9 9-9zm20 5a2 2 0 10-.001 3.999A2 2 0 0035 11zm-11 3c-5.511 0-10 4.489-10 10s4.489 10 10 10 10-4.489 10-10-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z"
      ></path>
    </svg>
  );
}

export default IgIcon;
