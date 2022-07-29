import React, { useEffect, useState } from "react"
import cssModule from "css-modules-name"
import styles from "./index.less"

const cm = cssModule([styles])

function useForm<T extends object>(initData: T) {
    const [state, setState] = useState(() => ({...initData}))
    const dispatch = (data: Partial<T>) => {
        setState(state => {
            console.log("xxxxxxxxxxxxxx")
            return {...state, ...data}
        })
    }
    console.log("state:", state)
    return {state, dispatch}
}

function Artist() {
    const {state, dispatch} = useForm({name: "heyu", age: 0})
    const [time, setTime] = useState(0)
    const click = () => {
        setTime(new Date().valueOf())
        dispatch({age: new Date().valueOf()})
        dispatch({name: "zhangsan"})
    }
    const [content, setContent] = useState("")
    return <div>
        <div className={cm("container")}>
            {state.name}
        </div>
        <div>
            <input type="text" value={content} onChange={e => setContent(e.target.value)} />
            {time}
            <button onClick={click}>setTime</button>
        </div>
    </div>
}

export default Artist