import { musicRequest } from "../request"

function GetHotDetail() {
	return musicRequest<MusicSpace.HotItem[]>({
		url: "/search/hot/detail"
	})
}

export default {
	GetHotDetail
}