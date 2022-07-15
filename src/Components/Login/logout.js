import React from "react";
import userSlice from "../../store/user";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const Logout = () => {
	const dispatch = useDispatch();

	localStorage.removeItem("sessionId");
	localStorage.removeItem("sessionName");
	localStorage.removeItem("jwtToken");
	localStorage.removeItem("sessionCity");
	localStorage.removeItem("sessionImage");

	// user store = null
	dispatch(userSlice.actions.removeUser());

	return <Navigate to="/register" />;
};

export default Logout;
