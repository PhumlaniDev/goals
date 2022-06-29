import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const header = () => {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/">GoalSetter</Link>
			</div>
			<ul>
				<Link to="/login">
					<FaSignInAlt />
					Login
				</Link>
				<Link to="/register">
					<FaUser />
					Register
				</Link>
			</ul>
		</header>
	);
};

export default header;
