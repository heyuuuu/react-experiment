import { useDispatch, useSelector } from "react-redux"
import { userInfo } from "@/store/redux"
import { Button } from "@/components"

function Redux() {
	const state = useSelector<any, any>(state => state)
	const dispath = useDispatch()
	return <div>
		this is redux{state.userInfo.age}===
		<Button onClick={() => {
			dispath(userInfo.actions.set(18))
		}}>18</Button>
	</div>
}

export default Redux