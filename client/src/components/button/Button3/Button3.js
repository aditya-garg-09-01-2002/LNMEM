import react from "react";
import "./Button3.css";

export default function Button3({buttonName}) {
    const handleClick = () => {
        window.location.href = "https://dev.to/webdeasy/top-20-css-buttons-animations-f41";
    }
    return(
        <div className="Button3" onClick={handleClick}> 
            {buttonName}
        </div>
    );
}