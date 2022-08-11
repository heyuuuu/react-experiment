import ReactDOM from "react-dom"
import cssModule from "css-modules-name"
import { useReactives, useAnimation } from "@/hooks"
import styles from "./index.less"

const cm = cssModule(styles)

interface Props {
	text: string
}
function Modal(props: Props) {
	return <div>{props.text}</div>
}

function Grid() {

	const [state, setState, reaction, mutation] = useReactives({time: 0, text: "", visible: false}, ["visible"])

	const input = (text: string) => {
		setState({text, visible: true})
		console.log(state)
		// setState({text, visible: true})
	}

	// const css = useAnimation(["visible", "hidden"], state.visible)

	return <div className={cm("container")}>
		{/* <div className={cm("mask")}><span onClick={() => setState({visible: false})}>===</span></div> */}
		<div className={cm("item col-1")}>{state.text}</div>
		<div className={cm("item col-1")}><input defaultValue={state.text} onChange={ev => input(ev.target.value)} /></div>
		{/* <div className={cm("item col-1")}><span onClick={() => setState(() => ({time: 123}))}>3333</span></div> */}
		<div className={cm("item col-1")}></div>
		<div className={cm("item col-1")}><button onClick={reaction}>reaction</button></div>
		<div className={cm("item col-1")}></div>
	</div>
}

export default Grid