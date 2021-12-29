import cssModules from "css-modules-name"
import styles from "./index.less"

interface Props {
    children: string
    className?: string
}

const cm = cssModules(styles)

function Label(props: Props) {
    return <div className={cm("label-container", props.className)}>{props.children}</div>
}

export default Label