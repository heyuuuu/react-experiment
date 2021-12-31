// 多端适配

interface Props {
	webRender?: React.ReactNode // web端页面
	wapRender?: React.ReactNode // wap端页面
	hwapRender?: React.ReactNode // 横版页面
}

function ClientRoute(props: Props) {
	return <div>this is div</div>
}

export default ClientRoute