import React, { useLayoutEffect, useMemo } from "react"
import ReactDOM from "react-dom"

import { WrapContext, useModalConext } from "./WrapContext"

interface Props extends WrapContext {
	visible?: boolean
}

interface Modal {
	(props: Props): JSX.Element | null
	useModalConext: typeof useModalConext
	create: typeof Create
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

function Create(Node: React.ReactChild | React.FC, props?: Props) {

	const container = document.createElement("div")

	const onClose = (data: unknown) => {
		ReactDOM.unmountComponentAtNode(container)
		container.remove()
		props?.onClose?.(data)
	}

	root?.append(container)

	ReactDOM.render(
		<WrapContext {...props} onClose={onClose}>
			{Node instanceof Function ? <Node /> : Node}
		</WrapContext>
		,
		container
	)
}

const MemoModal: any = React.memo(Modal)
MemoModal.useModalConext = useModalConext
MemoModal.create = Create

export default MemoModal as Modal