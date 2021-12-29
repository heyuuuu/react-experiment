import React from "react"
import cssModules from "css-modules-name"
import styles from "./index.less"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const cm = cssModules(styles)

function Input(props: Props) {
	return <input {...props} className={cm("input-container", props.className)} />
}

export default React.memo(Input)