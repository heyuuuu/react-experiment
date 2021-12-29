import { atom } from "recoil"

interface State {
    id: string
}

const userInfoAtom = atom<State>({
    key: "userinfo",
    default: {
        id: ""
    }
})

export default userInfoAtom