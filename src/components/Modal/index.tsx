import React, { useLayoutEffect, useMemo } from "react"
import ReactDOM from "react-dom"

import { WrapContext, useModalConext } from "./WrapContext"

interface MemoModal {
	visible?: boolean
	onClose?: (data: unknown) => void
	children?: JSX.Element | null
}

interface Modal {
	(props: MemoModal): JSX.Element | null
	useModalConext: typeof useModalConext
}

const root = document.querySelector("#modal-root")

function Modal(props: MemoModal) {

	const container = useMemo(() => document.createElement("div"), [])

	useLayoutEffect(() => {
		if(props.visible) {
			root?.append(container)
			return () => {
				container.remove()
			}
		}
	}, [props.visible])

	if(props.visible) {
		return ReactDOM.createPortal(<WrapContext onClose={props.onClose}>{props.children}</WrapContext>, container)
	} else {
		return null
	}
}

const MemoModal: any = React.memo(Modal)
MemoModal.useModalConext = useModalConext

export default MemoModal as Modal