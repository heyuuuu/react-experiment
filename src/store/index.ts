import { tentacle } from "react-tentacle"

export const {
	state,
	listen,
	dispatch,
	useListen,
	useTentacle,
	useInitTentacle
} = tentacle({
	name: "",
	address: "",
	message: ""
})