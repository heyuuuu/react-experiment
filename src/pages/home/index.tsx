import { useState } from "react"
import cssModules from "css-modules-name"
import styles from "./index.module.css"

const cm = cssModules(styles)

function Home () {
	return <div className={cm("container")}>
		<input />
		<div><button>age</button></div>
	</div>
}

export default Home