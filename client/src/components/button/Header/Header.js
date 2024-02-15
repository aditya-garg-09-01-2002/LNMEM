import React from "react";
import Home from "../../../Pages/Home/Home";
import About from "../../../Pages/About/About";
import Button from "../button/Button1/Button";
import Button2 from "../button/Button2/Button2";
import Button3 from "../button/Button3/Button3";

function Header() {
    return (
        <div>
            <Button buttonName={"LOGIN"}></Button>
            <Button2 buttonName={"NEW-BUTTON"}></Button2>
            <Button3 buttonName={"BUTTON3"}></Button3>
        </div>
    );
}

export default Header;