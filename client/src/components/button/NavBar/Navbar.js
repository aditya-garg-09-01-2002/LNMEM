import React from "react";
import Button from "../button/Button1/Button";
import Button2 from "../button/Button2/Button2";
import Button3 from "../button/Button3/Button3";
import "./Navbar.css"

function Navbar() {
    return (
        <div >
            <nav className="main-nav">
                {/* part 1 */}
                <div className="logo">
                    <img src="../../../Images/LNMIIT_LOGO.png" alt="Example" />
                </div>
                {/* part 2 */}
                <div className="buttons">
                    <Button2 buttonName={"Home"}></Button2>
                    <Button2 buttonName={"About"}></Button2>
                    <Button2 buttonName={"Services"}></Button2>
                    <Button2 buttonName={"Contact"}></Button2>
                </div>
                {/* part 3 */}
                <div className="b">
                    <Button2 buttonName={"Login"}></Button2>
                    <Button2 buttonName={"SignUp"}></Button2>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;