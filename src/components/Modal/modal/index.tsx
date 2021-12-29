import cssModules from "css-modules-name"

import styles from "./index.less"

const cm = cssModules(styles)

interface Mask {
	mask?: boolean // 遮罩
	middle?: boolean // 是否居中
	children?: React.ReactNode
}

function Mask(props: Mask) {

	const { mask, middle } = props

	return <div className={cm("modal-container", {mask, middle})}>
        {props.children}
    </div>
}

export default Mask