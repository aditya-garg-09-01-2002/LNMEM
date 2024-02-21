import React from "react"
import Navbar from "../../components/Navigationbar/Navbar"
import "./Home.css"
import logo from "./logo5.png"

export default function Home(){
    return(
        <div className="M" style={{
            overflowY:"hidden"
        }}>
            <Navbar />
            <img src={logo} style={{
                position:"fixed",
                height:"100dvh",
                width:"100dvw",
                zIndex:"-1",
                top:20
            }}/>
            <div className="container">
                <div className="heading">
                    <h1>
                        Welcome to the Exam Management System of The LNMIIT!
                    </h1>
                </div>
            </div>
            {/* <div className="image">
                <img className = "i1" src={logo} alt="Adi" />
            </div> */}
        </div>
    )
}