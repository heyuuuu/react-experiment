import { createTentacle } from "react-tentacle"

type State = {
	name: string
	address: string
}

const { 
	dispatch,
	useTentacles,
	useListen,
	subscribe,
	unSubscribe
} = createTentacle<State>({
	name: "",
	address: ""
})

export {
	dispatch,
	useListen,
	subscribe,
	unSubscribe,
	useTentacles
}