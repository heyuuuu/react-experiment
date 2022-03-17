import { configureStore, createSlice } from "@reduxjs/toolkit"

const userInfo = createSlice({
	name: "userInfo",
	initialState: {
		age: 0
	},
	reducers: {
		set: (state, action) => {
			state.age = action.payload
		}
	}
})

const store = configureStore({
	reducer: {
		userInfo: userInfo.reducer
	}
})

export {
	userInfo
}

export default store