import React from "react";
import "./button.css";

export default function Button({ buttonName }) {
  const handleClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="button" onClick={handleClick}>
      {buttonName}
    </div>
  );
}
