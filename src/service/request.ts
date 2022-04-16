import axios, { AxiosRequestConfig, AxiosStatic, AxiosResponse } from "axios"
import notice from "@/notice"

type Instance = < Data= unknown >(config: AxiosRequestConfig) =>  Promise<Data>

export const musicRequest = axios.create({
	baseURL: "http://cloud-music.pl-fe.cn/"
}) as Instance & AxiosStatic

function Success(res: AxiosResponse<ServiceSpace.MusicResultData>) {
	if(res.data.code == 200) {
		return res.data.data
	} else {
		notice.message({title: res.data.msg})
		return Promise.reject(res.data.msg)
	}
}

musicRequest.interceptors.response.use(Success)