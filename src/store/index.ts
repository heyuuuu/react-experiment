import { createTentacle } from "react-tentacle"

type State = {
	name: string
	address: string
}

const { useTentacles } = createTentacle<State>({
	name: "",
	address: ""
})

export {
	useTentacles
}