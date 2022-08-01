import { Area } from "@/components"
import { useInitTentacle } from "@/store"

import Home from "./home"
import Context from "./context"
import Tentacle from "./Tentacle"
import RecoilPage from "./Recoil"
import Grid from "./grid"
import Redux from "./redux"

function Index() {
	useInitTentacle()
	return <div>
		<Area title="pages/home"><Home /></Area>
		<Area title="pages/context" description="经典操作context以及modal运用"><Context /></Area>
		<Area title="react-tentacle" description="灵活的状态管理"><Tentacle /></Area>
		<Area title="recoil" description="分散式状态管理"><RecoilPage /></Area>
		<Area title="@reduxjs/toolkit" description="下一代状态管理"><Redux /></Area>
		<Area title="Grid" description="栅格系统"><Grid /></Area>
	</div>
}

export default Index