import cssModules from "css-modules-name"
import styles from "./index.less"

const cm = cssModules(styles)

interface Props {
	title?: string // 组件标题
	description?: string // 描述
	children: React.ReactNode
}

function Area(props: Props) {
	return <div className={cm("area-container")}>
		<div className={cm("area-header")}>
			<p className={cm("area-title")}>{props.title}</p>
			<p className={cm("area-description")}>{props.description}</p>
		</div>
		{ props.children }
	</div>
}

export default Area