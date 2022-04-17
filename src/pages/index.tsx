import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "./Layout/Home"
import MusicLayout from "./Layout/Music"
import Experiment from "./Experiment"

function Index() {
	return <React.Suspense fallback={null}>
		<BrowserRouter basename="/">
			<Routes>
				<Route element={<HomeLayout />}>
					<Route index element={<Experiment />}></Route>
					<Route path="/music" element={<MusicLayout />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.Suspense>
}

export default Index