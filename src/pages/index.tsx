import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const HomeLayout = React.lazy(() => import("./Layout/Home"))
const MusicLayout = React.lazy(() => import("./Layout/Music"))
const Experiment = React.lazy(() => import("./Experiment"))
const Home = React.lazy(() => import("./Music/Home"))
const Artist = React.lazy(() => import("./Music/Artist"))

function Index() {
	return <React.Suspense fallback={null}>
		<BrowserRouter basename="/">
			<Routes>
				<Route element={<HomeLayout />}>
					<Route index element={<Experiment />} />
					<Route path="/music" element={<MusicLayout />}>
						<Route index element={<Home />} />
						<Route path="artist" element={<Artist />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.Suspense>
}

export default Index