import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import { QueryClientProvider } from "react-query"
import { Area } from "@/components"
import { tools } from "@/utils"
import { useClientFit } from "@/hooks"

import Home from "./pages/home"
import Context from "./pages/context"
import Tentacle from "./pages/Tentacle"
import RecoilPage from "./pages/Recoil"

import "animate.css"
import "./styles/index.css"

const root = document.querySelector("#root")

function App() {

	const ENV = useClientFit()

	console.log("ENV:", ENV)

	return <RecoilRoot>
		<QueryClientProvider client={tools.queryClient}>
			<div>
				<Area title="pages/home"><Home /></Area>
				<Area title="pages/context" description="经典操作context以及modal运用"><Context /></Area>
				<Area title="react-tentacle" description="灵活的状态管理"><Tentacle /></Area>
				<Area title="recoil" description="分散式状态管理"><RecoilPage /></Area>
			</div>
		</QueryClientProvider>
	</RecoilRoot>
}

ReactDOM.render(<App />, root)