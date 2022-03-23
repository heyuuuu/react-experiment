import React, { useEffect, useMemo } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import { QueryClientProvider } from "react-query"
import { subscribe } from "@/store"
import store from "@/store/redux"
import { tools } from "@/utils"
import { useReactives } from "@/hooks"
import notice from "@/notice"

import WebEntry from "./web"
import WapEntry from "./wap"

import "animate.css"
import "./styles/index.css"

const root = document.querySelector("#root")

{
	subscribe(state => {
		if(state.message) {
			notice.message({title: state.message})
		}
	}, ["message"])

}

function useFlexible() {

	const [state, setState] = useReactives<{
		env: "web" | "wap" | ""
	}>({
		env: ""
	},["env"])

	useEffect(() => {

		const resize = () => {
			if(document.body.offsetWidth > 750) {
				document.documentElement.style.fontSize = ''
				setState({env: "web"})
			} else {
				document.documentElement.style.fontSize = document.body.offsetWidth / 750 * 100 + 'px'
				setState({env: "wap"})
			}
		}
	
		window.addEventListener("resize", resize)
	
		resize()

		return () => {
			window.removeEventListener("resize", resize)
		}

	}, [])

	return state.env
}

function Root() {

	const env = useFlexible()

	const Entry = useMemo(() => {
		if(env === "web") {
			return WebEntry
		} else {
			return WapEntry
		}
	}, [env])

	return <Provider store={store}>
		<RecoilRoot>
			<QueryClientProvider client={tools.queryClient}>
				<BrowserRouter basename="/">
					<React.Suspense fallback={null}>
						<Entry />
					</React.Suspense>
				</BrowserRouter>
			</QueryClientProvider>
		</RecoilRoot>
	</Provider>
}

ReactDOM.render(<Root />, root)