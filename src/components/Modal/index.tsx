import React, { useLayoutEffect, useMemo } from "react"
import ReactDOM from "react-dom"

import { WrapContext, useModalConext } from "./WrapContext"

interface Props extends WrapContext {
	visible?: boolean
}

interface Modal {
	(props: Props): JSX.Element | null
	useModalConext: typeof useModalConext
}

const root = document.querySelector("#modal-root")

function Modal(props: Props) {

	const { visible, ...wrapProps } = props
	
	const container = useMemo(() => document.createElement("div"), [])

	useLayoutEffect(() => {
		if(visible) {
			root?.append(container)
			return () => {
				container.remove()
			}
		}
	}, [visible])

	if(visible) {
		return ReactDOM.createPortal(<WrapContext {...wrapProps} />, container)
	} else {
		return null
	}
}

const MemoModal: any = React.memo(Modal)
MemoModal.useModalConext = useModalConext

export default MemoModal as Modal