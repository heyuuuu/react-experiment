import React from "react"
import cssModules from "css-modules-name"

import styles from "./index.less"

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const cm = cssModules(styles)

function Button(props: Props) {
	return <div {...props} className={cm("button-container", props.className)}>{props.children}</div>
}

export default React.memo(Button)