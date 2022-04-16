import ReactDOM from "react-dom"
import cssModule from "css-modules-name"
import styles from "./index.less"

const cm = cssModule(styles)

interface Props {
	text: string
}
function Modal(props: Props) {
	return <div>{props.text}</div>
}

function Grid() {

	const M = (props: Props) => {
		return ReactDOM.createPortal(Modal(props), document.body)
	}

	return <div className={cm("container")}>
		<div className={cm("item col-1")}>1111</div>
		<div className={cm("item col-1")}>2222</div>
		<div className={cm("item col-1")}>3333</div>
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