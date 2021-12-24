import { useEffect, useLayoutEffect, useState } from "react"

function useAnimation<T = string | string[]>(before: T, after: T, visible?: boolean) {
	const [dynamicStyles, setDynamicStyles] = useState(before)

	useLayoutEffect(() => {
		setDynamicStyles(before)
	}, [visible])

	useEffect(() => {
		if(visible != false) {
			setDynamicStyles(after)
		}
	}, [visible])

	return dynamicStyles
}

export default useAnimation