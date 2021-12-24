import ReactDOM from "react-dom"
import { Area } from "@/components"

import "./styles/common.css"

import Home from "./pages/home"
import Context from "./pages/context"

const root = document.querySelector("#root")

function App() {
	return <div>
		<Area title="pages/home"><Home /></Area>
		<Area title="pages/context"><Context /></Area>
	</div>
}

ReactDOM.render(<App />, root)