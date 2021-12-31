import axios, { AxiosRequestConfig, AxiosStatic, AxiosResponse } from "axios"

type Instance = < Data= unknown >(config: AxiosRequestConfig) =>  Promise<Data>

export const musicRequest = axios.create({
	baseURL: "http://cloud-music.pl-fe.cn/"
}) as Instance & AxiosStatic

{
	musicRequest.interceptors.response.use((res: AxiosResponse<ServiceSpace.MusicResultData>) => {
		if(res.data.code == 200) {
			return res.data.data
		} else {
			Promise.reject(res.data)
		}
	})
}