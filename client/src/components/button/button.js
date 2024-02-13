import React from "react"
import "./button.css"

export default function Button({buttonName,abcdef}){
    console.log(abcdef)
    return (
        <div className="button">
            {buttonName}
        </div>  
    )
}