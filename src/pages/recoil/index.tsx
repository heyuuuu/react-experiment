import { useRecoilState } from "recoil"
import { userInfoAtom } from "@/atom"
import { Input, Label } from "@/components"

function RecoilPage() {

    const [userInfo, setUserInfo] = useRecoilState(userInfoAtom)

    return <div>
        <div className="flex">
            <Label>atom.userinfo.id:</Label>
            <Input value={userInfo.id} onChange={e => setUserInfo({id: e.target.value})} />
        </div>
    </div>
}

export default RecoilPage