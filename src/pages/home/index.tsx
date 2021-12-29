import cssModules from "css-modules-name"
import { useRecoilValue } from "recoil"
import { Input, Label } from "@/components"
import { useTentacles } from "@/store"
import { userInfoAtom } from "@/atom"
import styles from "./index.less"

const cm = cssModules(styles)

function Home () {
	
	const [state, setState] = useTentacles(["name"])

	const userInfo = useRecoilValue(userInfoAtom)

	return <div className={cm("container")}>
		<div className={cm("flex m-t-5")}>
			<Label>render:</Label> {new Date().valueOf()}
		</div>
		<div className={cm("flex m-t-5")}>
			<Label>state.name: </Label>
			<Input value={state.name} onChange={e => setState({name: e.target.value})} />
		</div>
		<div className={cm("flex m-t-5")}>
			<Label>userId: </Label><Input value={userInfo.id} onChange={console.log} />
		</div>
	</div>
}

export default Home