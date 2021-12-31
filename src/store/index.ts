import { createTentacle } from "react-tentacle"

type State = {
	env: "web" | "wap" | "hwap" // web端 | wap | 横屏
	name: string
	address: string
}

const { dispatch, useTentacles, useListen, subscribe, unSubscribe } = createTentacle<State>({
	env: "web",
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