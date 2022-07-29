import { Outlet, Link, NavLink , useNavigate, useLocation } from "react-router-dom"
import cssModules from "css-modules-name"
import style from "./index.less"

const cm = cssModules([style])

function Music() {
    const nav = useNavigate()
    return <div>
        <div>this is music-layout</div>
        <div>
            <NavLink className={({isActive}) => cm("m-r-5", {"link-active": isActive})} to={`/music`} end>home</NavLink>
            <NavLink className={({isActive}) => cm("m-r-5", {"link-active": isActive})} to={`/music/artist`} end>artist</NavLink>
            <div onClick={() => nav(-1)}>back</div>
        </div>
        <Outlet />
    </div>
}

export default Music