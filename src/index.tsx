import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import { QueryClientProvider } from "react-query"
import store from "@/store/redux"
import { tools } from "@/utils"
import App from "./pages"

import "animate.css"
import "./styles/index.css"

const root = document.querySelector("#root")

function Root() {

	return <Provider store={store}>
		<RecoilRoot>
			<QueryClientProvider client={tools.queryClient}>
				<App />
			</QueryClientProvider>
		</RecoilRoot>
	</Provider>
}

ReactDOM.render(<Root />, root)