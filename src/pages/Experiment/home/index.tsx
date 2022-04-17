import React from "react"
import cssModules from "css-modules-name"
import { useRecoilValue } from "recoil"
import { Input, Label, Section } from "@/components"
import { useTentacles } from "@/store"
import { userInfoAtom } from "@/atom"
import styles from "./index.less"


const cm = cssModules(styles)

function Home () {
	
	const [state, setState] = useTentacles(["name"])

	const userInfo = useRecoilValue(userInfoAtom)

	return <div className={cm("container")}>
		<div className={cm("flex m-t-5")}>
			<Label>render:</Label>
			<Section>{new Date().valueOf()}</Section>
		</div>
		<div className={cm("flex m-t-5")}>
			<Label>来自store.name: </Label>
			<Input value={state.name} onChange={e => setState({name: e.target.value})} />
		</div>
		<div className={cm("flex m-t-5")}>
			<Label>来自store.address: </Label>
			<Section>{state.address}</Section>
		</div>
		<div className={cm("flex m-t-5")}>
			<Label>来自atom.userinfo.id: </Label><Input value={userInfo.id} onChange={console.log} />
		</div>
	</div>
}

export default React.memo(Home)