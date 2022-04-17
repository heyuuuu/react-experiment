import { Outlet, Link, NavLink } from "react-router-dom"
import cssModules from "css-modules-name"
import style from "./index.less"

const cm = cssModules([style])

function Music() {
    return <div>
        <div>this is music-layout</div>
        <div>
            <NavLink className={({isActive}) => cm("m-r-5", {"link-active": isActive})} to={`/music`} end>home</NavLink>
            <NavLink className={({isActive}) => cm("m-r-5", {"link-active": isActive})} to={`/music/artist`} end>artist</NavLink>
        </div>
        <Outlet />
    </div>
}

export default Music