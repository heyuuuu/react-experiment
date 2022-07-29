import { tentacle } from "react-tentacle"

type State = {
	name: string
	address: string
	message: string
}

export const {
	listen,
	dispatch,
	useListen,
	useTentacle,
	useInitTentacle
} = tentacle<State>({
	name: "",
	address: "",
	message: ""
})