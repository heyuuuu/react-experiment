import { useReactives } from "react-tentacle/hooks"

function useReactive <T extends Tentacle.OBJECT>(state: Partial<T>, deps?: (keyof T)[]) {
    const { raw, reactive, reaction, mutation } = useReactives(state, deps)
    return [raw, reactive, reaction, mutation] as [typeof raw, typeof reactive, typeof reaction, typeof mutation]
}

export default useReactive