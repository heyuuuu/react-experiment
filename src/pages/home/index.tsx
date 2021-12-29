import cssModules from "css-modules-name"
import { Input } from "@/components"
import { useTentacles } from "@/store"
import styles from "./index.less"

const cm = cssModules(styles)

function Home () {
	
	const [state, setState] = useTentacles(["name"])

	return <div className={cm("container")}>
		<div>render: {new Date().valueOf()}</div>
		<Input value={state.name} onChange={e => setState({name: e.target.value})} />
	</div>
}

export default Home