import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});

export default store;

/*

import React from "react";

const store = () => {
	return <div>ini tes store binar-finalproject</div>;
};

export default store;

*/
