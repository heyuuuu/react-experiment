declare namespace ServiceSpace {
	type MusicResultData<Result = unknown> = {
		code: number
		data: Result
		message: string
	} & {
		code: number
		msg: string
	}
}