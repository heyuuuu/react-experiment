import React , { createContext } from "react";

const Context = createContext<{
	name?: string
	setCurrentName?: (name: string) => void
}>({})

function useContext () {
	return React.useContext(Context)
}

interface EachProps {
	name?: string
	setCurrentName?: (name: string) => void
	children: React.ReactNode
}
function Each(props: EachProps) {
	return <Context.Provider value={{
		name: props.name,
		setCurrentName: props.setCurrentName
	}}>
		{props.children ?? null}
	</Context.Provider>
}

interface EachItemProps {
	name?: string
	children?: React.ReactElement<unknown> | null
}

function Item(props: EachItemProps) {

	const { name } = useContext()

	if(name === props.name) {
		return props.children ?? null
	} else {
		return null
	}
};

interface Each {
	(props: EachProps): JSX.Element
	useContext: typeof useContext
	Item: React.NamedExoticComponent<EachItemProps>
}

const Main = Each as Each
Main.useContext = useContext
Main.Item = React.memo(Item)

export default Main