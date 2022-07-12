import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

// token dimulai dari NOL

let initialState = null;

// try and catch token

try {
	// nama token
	const token = localStorage.getItem("secondHandToken");
	const userData = jwtDecode(token);
	initialState = userData;
} catch {}

const userSlice = createSlice({
	name: "user",
	initialState: {
		data: initialState,
	},
	reducers: {
		// dipakai saat user login dan register

		addUser: (state, action) => {
			state.data = { ...action.payload.userData };
		},

		// logout user

		removeUser: (state) => {
			state.data = null;
		},
	},
});

export default userSlice;
