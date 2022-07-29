import { useEffect, useLayoutEffect, useState } from "react"


function useAnimation(action: string | [string, string], visible?: boolean) {
    const [enter, leave] = [action].flat()
    const [dynamicss, setDynamicss ] = useState("")
    useLayoutEffect(() => {
        setDynamicss(leave)
    }, [visible])
    useEffect(() => {
        if(visible !== false) {
            setDynamicss(enter)
        }
    }, [visible])
    return dynamicss
}

export default useAnimation