import React from "react"
import { Routes, Route } from "react-router-dom"

const Home = React.lazy(() => import("./home"))

function WapEntry() {
	return <div>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</div>
}

export default WapEntry