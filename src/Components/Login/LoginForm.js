import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../store/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";

const LoginForm = () => {
	const { register, handleSubmit, formState } = useForm();

	// jika gagal login maka akan muncul pesan :
	const [loginStatus, setLoginStatus] = useState({
		success: false,
		message: "",

		/*
			{!loginStatus.sucess && loginStatus.message && <p className="text-danger  m-0 ">{loginStatus.message}</p>}

	*/
	});

	// dispatch axios
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//menampilkan data  email dan password

	const formSubmithandler = (data) => {
		console.log(data);

		const postData = {
			email: data.user_email,
			password: data.user_password,
		};

		axios
			.post("https://finalsecondhand-staging.herokuapp.com/auth/login", postData) // kalau dah ready taruh link heroku disini
			.then((res) => {
				console.log(res);
				/* memastikan bahwa token nya ada
		if (typeof res.data.acessToken !== "undefined") {
					localStorage.setItem("secondHandToken", res.data.acessToken);
				} */

				// menyimpan di redux store

				localStorage.setItem('secondHandToken', res.data.token)
				// const user = jwtDecode(res.data.token);
				const config = {
                    headers: {
                        Authorization: 'Bearer ' + res.data.token
                    }
                };
				axios.get(`https://finalsecondhand-staging.herokuapp.com/user`, config).then((res) => {
					dispatch(
						userSlice.actions.addUser({
							userData: res.data,
						})
					);
					// jika sudah login maka diarahkan ke :
					navigate("/seller/1");
				});
			})

			// failed register notification
			.catch((err) => {
				//	console.log(err.response);
				setLoginStatus({
					success: false,
					message: "Failed to Login, make sure your Account has been register",
				});
			});
	};

	return (
		<div className="login_right col-12 col-lg-4">
			<h2>Masuk</h2>
			<form className="login_form" onSubmit={handleSubmit(formSubmithandler)}>
				<div>
					<label className="login_label" htmlFor="user_email">
						Email
					</label>
					<div>
						<input type="email" name="user_email" id="user_email" required placeholder=" Contoh: johndee@gmail.com" className="input_box" {...register("user_email")}></input>
						<p>{formState.errors.user_email?.type === "required"}</p>
					</div>
				</div>
				<div>
					<label className="login_label" htmlFor="user_password">
						Password
					</label>
					<div>
						<input type="password" name="user_password" id="user_password" required="password" placeholder="Masukkan password" className="input_box" {...register("user_password")}></input>
						<FiEye className="login_icon" />
						<p>{formState.errors.user_name?.type === "required"}</p>
					</div>
				</div>
				<button type="submit" className="login_submit mt-5">
					Masuk
				</button>
			</form>
			<div className="mx-2 my-4">{!loginStatus.sucess && loginStatus.message && <p className="text-danger">{loginStatus.message}</p>}</div>

			<div className="footer">
				<p>
					belum punya akun?
					<Link to="/register" className="daftar">
						Daftar sini
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;

/*

		<FiEye className="login_icon" />

*/
