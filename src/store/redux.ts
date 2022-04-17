import { configureStore, createSlice } from "@reduxjs/toolkit"

const userInfo = createSlice({
	name: "userInfo",
	initialState: {
		age: 0,
		name: "heyu"
	},
	reducers: {
		set: (state, action) => {
			console.log("state:", state)
			state.age = action.payload
			return state
		},
		name: (state, action) => {
			state.name = action.payload
			return state
		}
	}
})

const store = configureStore({
	reducer: {
		userInfo: userInfo.reducer
	},
	preloadedState: {
		userInfo: {
			age: 10,
			name: "heyu"
		}
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(({ dispatch, getState }) => {
			return next => {
				return (action) => {
					console.log("getState()", getState())
					if(action.type === "userInfo/set") {
						dispatch({type: "userInfo/name", payload: "wuming"})
					}
					if(action.payload == "18") {
						dispatch({type: action.type, payload: "20"})
					} else {
						setTimeout(() => {
							console.log("next:", action)
							next(action)
						}, 10000);
					}
				}
			}
		})
	}
})

export {
	userInfo
}

export default store