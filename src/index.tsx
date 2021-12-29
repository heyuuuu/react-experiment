import ReactDOM from "react-dom"
import { Area } from "@/components"

import Home from "./pages/home"
import Context from "./pages/context"
import Tentacle from "./pages/Tentacle"
import RecoilPage from "./pages/Recoil"

import "animate.css"
import "./styles/index.css"

const root = document.querySelector("#root")

function App() {
	return <div>
		<Area title="pages/home"><Home /></Area>
		<Area title="pages/context" description="经典操作content以及modal运用"><Context /></Area>
		<Area title="react-tentacle" description="灵活的状态管理"><Tentacle /></Area>
		<Area title="recoil" description="分散式状态管理"><RecoilPage /></Area>
	</div>
}

ReactDOM.render(<App />, root)