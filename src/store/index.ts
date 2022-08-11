import { tentacle } from "react-tentacle"

const {
	state,
	listen,
	reactive: dispatch,
	useListen,
	useTentacle: useTentacles,
	useInitTentacle
} = tentacle({
	name: "",
	address: "",
	message: ""
})

function useTentacle (deps?: (keyof typeof state)[]) {
	const { raw } = useTentacles(deps)
	return [raw, dispatch] as [typeof raw, typeof dispatch]
}

export {
	state,
	listen,
	dispatch,
	useListen,
	useTentacle,
	useInitTentacle
}