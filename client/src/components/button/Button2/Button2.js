import react from "react";
import "./Button2.css";

export default function Button2({buttonName}) {
    const handleClick = () => {
        window.location.href = "https://www.google.com";
    };
    return (
        <div className="button2" onClick={handleClick}>
            {buttonName}
        </div>
    );
}
