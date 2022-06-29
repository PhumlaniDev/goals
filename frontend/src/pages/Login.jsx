import React from "react";
import { useLoginHook } from "../hooks/useLoginHook";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
	const { email, password, onChange, onSubmit } = useLoginHook();

	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> Login
				</h1>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter an email"
							value={email}
							onChange={onChange}
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter password"
							value={password}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-block" type="submit">
							Register
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Login;
