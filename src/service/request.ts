import axios, { AxiosRequestConfig, AxiosStatic, AxiosResponse } from "axios"
import notice from "@/notice"


type Instance = < Data= unknown >(config: AxiosRequestConfig) =>  Promise<ServiceSpace.MusicResultData<Data>>

export const musicRequest = axios.create({
	baseURL: "http://cloud-music.pl-fe.cn/"
}) as Instance & AxiosStatic

{
	musicRequest.interceptors.response.use((res: AxiosResponse<ServiceSpace.MusicResultData>) => {
		if(res.data.code == 200) {
			return res.data
		} else {
			Promise.reject(res.data.message)
		}
	})
}