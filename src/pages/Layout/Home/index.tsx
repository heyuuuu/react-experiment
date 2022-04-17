import { Outlet, Link } from "react-router-dom"
import cssModule from "css-modules-name"
import { Button } from "@/components"
import styles from "./index.less"

const cm = cssModule(styles)

function Home() {
    return <div>
        <div>
            <Button>
                <Link to="/">experiment</Link>
            </Button>
            <Button>
                <Link to="music">music</Link>
            </Button>
        </div>
        <div className={cm("home-layout-container")}>
            <Outlet />
        </div>
    </div>
}

export default Home