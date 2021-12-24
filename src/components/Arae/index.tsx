import cssModules from "css-modules-name"
import styles from "./index.module.css"

const cm = cssModules(styles)

interface Props {
	title?: string
	children: React.ReactNode
}

function Area(props: Props) {
	return <div className={cm("area-container")}>
		<div className={cm("area-title")}>{props.title}</div>
		{ props.children }
	</div>
}

export default Area