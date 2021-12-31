import { useLayoutEffect } from "react"
import { useReactives } from "@/hooks"

// 自适应环境判断
function useClientFit() {

	const [state, setState] = useReactives<{env: "web" | "wap" | "hwap"}>({}, ["env"])

	const computeENV = () => {
		const root = document.documentElement
		const width = root.clientWidth
		if(width > 750) {
			setState({env: "web"})
		} else {
			setState({env: "wap"})
		}
	}

	useLayoutEffect(() => {
		window.onresize = computeENV
		computeENV()
		return () => {
			window.onresize = null
		}
	}, [])

	return state.env
}

export default useClientFit