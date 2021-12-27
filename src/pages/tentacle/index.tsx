import { hooks } from "react-tentacle"

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