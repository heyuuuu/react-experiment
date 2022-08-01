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

	const [state, setState] = useReactives({time: 0, text: "", visible: false})

	const M = (props: Props) => {
		return ReactDOM.createPortal(Modal(props), document.body)
	}

	const input = (text: string) => {
		setState({text, visible: true})
	}

	const css = useAnimation(["visible", "hidden"], state.visible)

	return <div className={cm("container")}>
		<div className={cm("mask", css)}><span onClick={() => setState({visible: false})}>===</span></div>
		<div className={cm("item col-1")}>{state.text}</div>
		<div className={cm("item col-1")}><input defaultValue={state.text} onChange={ev => input(ev.target.value)} /></div>
		<div className={cm("item col-1")}><span onClick={() => setState(() => ({time: 123}))}>3333</span></div>
		<div className={cm("item col-1")}>4444</div>
		<div className={cm("item col-1")}>5555</div>

		<div className={cm("item row-2")}>xxx</div>
		<div className={cm("item col-2")} style={{height: 100}}>2222</div>
		<div className={cm("item col-1")}>4444</div>
		<div className={cm("item col-1")}>5555</div>

		<div className={cm("item col-2")} style={{height: 100}}>2222</div>
		<div className={cm("item col-1")}>4444</div>
		<div className={cm("item col-1")}>5555</div>
		<M text="hello word!" />
	</div>
}

export default Grid