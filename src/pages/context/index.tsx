import { useState } from "react"
import cssModules from "css-modules-name"
import { useAnimation } from "@/hooks"
import { Modal } from "@/components"

import styles from "./index.module.css"

const cm = cssModules(styles)

function Children11() {
	const css = useAnimation("visible-hidden", "animated-duration-300 animate__animated animate__zoomIn")
	const { onClose } = Modal.useModalConext()
	return <div className={cm("modal-box", css)}>
		<div>this is children11</div>
		<div><button onClick={onClose}>关闭上级</button></div>
	</div>
}

function Children1() {
	const [visible, setVisible]=  useState(false)
	const css = useAnimation("visible-hidden", "animated-duration-300 animate__animated animate__zoomIn")
	const { onClose } = Modal.useModalConext()
	return <div className={cm("modal-box", css)}>
		<div>this is children1</div>
		<Modal middle visible={visible} onClose={() => setVisible(false)}>
			<Children11 />
		</Modal>
		<div>
			<button onClick={() => setVisible(!visible)}>modal</button>
			<button onClick={onClose}>关闭上级</button>
		</div>
	</div>
}

function Context() {
	const [visible, setVisible]=  useState(false)
	return <div>
		<Modal mask middle visible={visible} onClose={() => setVisible(false)}>
			<Children1 />
		</Modal>
		<div>
			<button onClick={() => setVisible(!visible)}>modal</button>
		</div>
	</div>
}

export default Context