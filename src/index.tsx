import React from "react"
import ReactDOM from "react-dom"

import Home from "./pages/home"

const root = document.querySelector("#root")

function App() {
	return <div>hello word!试试试试<Home /></div>
}

ReactDOM.render(<App />, root)