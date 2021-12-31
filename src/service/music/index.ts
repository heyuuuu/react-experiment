import { musicRequest } from "../request"

function GetHotDetail() {
	return musicRequest<MusicSpace.HotItem[]>({
		url: "/search/hotss/detail"
	})
}

export default {
	GetHotDetail
}