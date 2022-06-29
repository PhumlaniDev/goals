import { FaUser } from "react-icons/fa";

import useRegisterHook from "../hooks/registerHook";

const Register = () => {
	const { name, email, password, confirmPassword, onChange, onSubmit } =
		useRegisterHook();

	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register
				</h1>
				<p>Create an account</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter your name"
							value={name}
							onChange={onChange}
						/>
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
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							placeholder="Enter your confirm_password"
							value={confirmPassword}
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

export default Register;
