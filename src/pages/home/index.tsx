import cssModules from "css-modules-name"
import styles from "./index.module.css"

const cm = cssModules(styles)

function Home () {
	return <div className={cm("container")}>
		<input />
		<p>this is psss</p>
	</div>
}

export default Home