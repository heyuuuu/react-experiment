import React, { useContext } from "react"

const Context = React.createContext<{
	onClose?: (data: unknown) => void
}>({})

interface Props {
	onClose?: (data: unknown) => void
	children?: JSX.Element | null
}

function useModalConext() {
	const context = useContext(Context)
	return context
}

function WrapContext(props: Props) {

	return <Context.Provider value={{
		onClose: props.onClose
	}}>
		{props.children}
	</Context.Provider>
}

export {
	WrapContext,
	useModalConext
}