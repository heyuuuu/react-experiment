declare namespace ServiceSpace {
	interface MusicResultData<Result = unknown> {
		code: number
		data: Result
		message: string
	}
}