import { useEffect } from "react"
import cssModules from "css-modules-name"
import { Modal } from "@/components"
import { useAnimation } from "@/hooks"

import styles from "./index.less"

interface Message {
    title: string
}

const cm = cssModules(styles)

function Message(props: Message) {

    const { onClose } = Modal.useModalConext()

    const css = useAnimation("visible-hidden", "animated-duration-500 animate__animated animate__bounceInDown")

    useEffect(() => {
        setTimeout(() => onClose?.(), 2000);
    }, [])

    return <div className={cm("message-container", css)}>
        <div className={cm("message-content")}>{props.title}</div>
    </div>
}

function main(props: Message) {
    Modal.create(<Message {...props} />)
}

export default main