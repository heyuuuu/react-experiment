import cssModules from "css-modules-name"
import styles from "./index.less"

interface Props {
	children?: React.ReactNode
}

const cm = cssModules(styles)

function Section(props: Props) {
	return <div className={cm("section-container")}>{props.children}</div>
}

export default Section