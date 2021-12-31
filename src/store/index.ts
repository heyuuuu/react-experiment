import { createTentacle } from "react-tentacle"

type State = {
	name: string
	address: string
}

const { useTentacles, useListen, subscribe, unSubscribe } = createTentacle<State>({
	name: "",
	address: ""
})

export {
	useListen,
	subscribe,
	unSubscribe,
	useTentacles
}