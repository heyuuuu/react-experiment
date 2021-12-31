import { musicRequest } from "../request"

function GetHotDetail() {
	return musicRequest<MusicSpace.HotItem[]>({
		url: "/search/hotsss/detail"
	})
}

export default {
	GetHotDetail
}