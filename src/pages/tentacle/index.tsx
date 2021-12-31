import { useTentacles } from "@/store"
import { Button, Input, Label } from "@/components"

function Tentacle() {
	
	const [state, setState] = useTentacles(["name", "address"])

	const reset = () => {
		setState(() => ({
			name: "",
			address: ""
		}))
	}

	const click = () => {
		setState({address: new Date().valueOf().toString()})
	}

	return <div className="flex">
		<Input value={state.name} onChange={e => setState({name: e.target.value})} />
		<Label>address:</Label>
		<Input className="m-l-5" value={state.address} onChange={e => setState({address: e.target.value})} />
		<Button className="m-l-5" onClick={reset}>重置</Button>
		<Button className="m-l-5" onClick={click}>address</Button>
	</div>
}

export default Tentacle