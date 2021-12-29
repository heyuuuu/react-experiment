import { useState } from "react"
import cssModules from "css-modules-name"
import { useAnimation } from "@/hooks"
import { useTentacles } from "@/store"
import { Modal, Button, Input } from "@/components"

import styles from "./index.less"

const cm = cssModules(styles)

function Children11() {

	const { onClose } = Modal.useModalConext()

	const css = useAnimation("visible-hidden", "animated-duration-300 animate__animated animate__zoomIn")

	return <div className={cm("modal-box", css)}>
		<div>这是弹出的第二个窗口</div>
		<div><Button onClick={onClose}>关闭上级</Button></div>
	</div>
}

function Children1() {

	const { onClose } = Modal.useModalConext()

	const [state, setState] = useTentacles(["address"])

	const [visible, setVisible] = useState(false)

	const css = useAnimation("visible-hidden", "animated-duration-300 animate__animated animate__zoomIn")

	return <div className={cm("modal-box", css)}>
		<div>这是弹出的第一个窗口</div>
		<Modal middle visible={visible} onClose={() => setVisible(false)}>
			<Children11 />
		</Modal>
		<div className={cm("flex")}>
			<Input value={state.address} onChange={e => setState({address: e.target.value})} />
			<Button className="m-l-5 m-r-5" onClick={() => setVisible(!visible)}>modal</Button>
			<Button onClick={onClose}>关闭上级</Button>
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
			<Button onClick={() => setVisible(!visible)}>modal</Button>
		</div>
	</div>
}

export default Context