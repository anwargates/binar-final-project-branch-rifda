import React from "react";
import LoginHeader from "./LoginHeader";
import "./login.css";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";

const Login = () => {
	return (
		<div>
			<div className="login_container">
				<section className="arrow d-md-none">
					<LoginHeader />
				</section>
				<section className="main_register row">
					<LoginImage />
					<LoginForm />
				</section>
			</div>
		</div>
	);
};

export default Login;

/*

import React from "react";
import "./login.css";

const Login = () => {
	return (
		<div>
			<div className="register_container">
				<section className="arrow d-md-none">
					<img
						src="/SVG/arrow_left.svg"
						alt="arrow icon"
						className=" arrow-svg
						"
					/>
				</section>
				<div className="main_register row">
					<div className="login_left col-12 col-lg-5 p-0">
						<img src="/SVG/login_img.svg" className="d-none d-lg-block register_img" alt=" login" />
					</div>
					<div className="register_right col-12 col-lg-4">
						<h2>Masuk</h2>
						<form className="register_form">
							<label className="login_label" htmlFor="nama">
								Email
							</label>
							<div>
								<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
							</div>
							<label className="login_label" htmlFor="nama">
								Password
							</label>
							<div>
								<input type="Password" name="Password" id="Password" required placeholder="Masukkan password" className="input_box"></input>
							</div>
						</form>
						<button type="submit" className="btn_login mt-5">
							Masuk
						</button>
						<div className="footer">
							<p>
								belum punya akun?
								<a href="/register" className="daftar">
									Daftar sini
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;



<div>
			<div className="register_container">
				<section className="arrow d-md-none">
					<Header />
				</section>
				<section className="main_register row">
					<Image />
					<Form />
				</section>
			</div>
		</div>

*/
