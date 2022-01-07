import { createTentacle } from "react-tentacle"

type State = {
	name: string
	address: string
	message: string
}

const { 
	dispatch,
	useTentacles,
	useListen,
	subscribe,
	unSubscribe
} = createTentacle<State>({
	name: "",
	address: "",
	message: ""
})

export {
	dispatch,
	useListen,
	subscribe,
	unSubscribe,
	useTentacles
}