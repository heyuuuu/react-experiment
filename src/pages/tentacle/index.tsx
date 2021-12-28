import { hooks, scheduler } from "react-tentacle"

interface State {
	time: number
}

const message = scheduler<State>()

message.subscribe(state => {
	console.log(state.time)
}, {
	deps: ["time"]
})

function Tentacle() {
	const [state, setState] = hooks.useReactives<{
		name: string
		description: string
		age: number
	}>({
		name: "",
		description: ""
	}, ["name"])

	const reset = () => {
		setState(() => ({
			name: "",
			description: "description"
		}))
	}

	const click = () => {
		setState({age: new Date().valueOf()})
		message.dispatch({time: 125})
		console.log("crrentState", state.age)
	}

	console.log("render: ", state.description)

	return <div>
		<input value={state.name} onChange={e => setState({name: e.target.value})} />
		<input value={state.description} onChange={e => setState({description: e.target.value})} />
		<button onClick={reset}>重置</button>
		<button onClick={click}>age</button>
	</div>
}

export default Tentacle