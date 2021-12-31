import { useLayoutEffect, useRef } from "react"
import { dispatch, useTentacles } from "@/store"

type ENV = "web" | "wap" | "hwap"

// 自适应环境判断
function useClientFit() {

	const [state] = useTentacles([])

	const prveEnv = useRef<ENV>(state.env)

	const switchEnv = (env: ENV) => {
		if(prveEnv.current != env) {
			prveEnv.current = env
			dispatch({env})
		}
	}

	useLayoutEffect(() => {
		window.onresize = () => {
			const root = document.documentElement
			const width = root.clientWidth
			if(width > 750) {
				switchEnv("web")
			} else {
				switchEnv("wap")
			}
		}
	}, [])
}

export default useClientFit