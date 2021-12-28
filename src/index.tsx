import ReactDOM from "react-dom"
import { Area } from "@/components"

import Home from "./pages/home"
import Context from "./pages/context"
import Tentacle from "./pages/Tentacle"

import "animate.css"
import "./styles/common.css"

const root = document.querySelector("#root")

function App() {
	return <div>
		<Area title="pages/home"><Home /></Area>
		<Area title="pages/context" description="经典操作content以及modal运用"><Context /></Area>
		<Area title="react-tentacle"><Tentacle /></Area>
	</div>
}

ReactDOM.render(<App />, root)