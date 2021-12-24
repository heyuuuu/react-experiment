import { useState } from "react"
import { Modal } from "@/components"

function Children11() {
	const { onClose } = Modal.useModalConext()
	return <div>
		<div>this is children11</div>
		<div><button onClick={onClose}>关闭上级</button></div>
	</div>
}

function Children1() {
	const [visible, setVisible]=  useState(false)
	const { onClose } = Modal.useModalConext()
	return <div>
		<div>this is children1</div>
		<Modal visible={visible} onClose={() => setVisible(false)}>
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
		<Modal visible={visible} onClose={() => setVisible(false)}>
			<Children1 />
		</Modal>
		<div>
			<button onClick={() => setVisible(!visible)}>modal</button>
		</div>
	</div>
}

export default Context