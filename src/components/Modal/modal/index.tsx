import cssModules from "css-modules-name"

import styles from "./index.module.css"

const cm = cssModules(styles)

interface Mask {
	mask?: boolean // 遮罩
	middle?: boolean // 是否居中
	children?: JSX.Element
}

function Mask(props: Mask) {

	const { mask, middle } = props

	return <div className={cm("modal-container", {mask, middle})}>
        {props.children}
    </div>
}

export default Mask