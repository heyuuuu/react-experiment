import React, { useContext } from "react"
import Modal from "./modal"

interface ContextProps {
	onClose?: (data?: unknown) => void
}

interface WrapContext extends ContextProps, Modal {

}

const Context = React.createContext<ContextProps>({})

function useModalConext() {
	const context = useContext(Context)
	return context
}

function WrapContext(props: WrapContext) {

	const { onClose, ...maskProps } = props

	return <Context.Provider value={{onClose}}>
		<Modal {...maskProps} />
	</Context.Provider>
}

export {
	WrapContext,
	useModalConext
}