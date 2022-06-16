import {render} from "react-dom"
import React from "react"
import "./index.css"
import {List} from "./List"

render(
    <div> 
        Hello World!!
        <List />
    </div>,
    document.getElementById("app")

)