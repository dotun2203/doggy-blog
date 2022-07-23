import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>doggy thoughts</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">your doggy thoughts?</Link>
			</div>
		</nav>
	);
};

export default Navbar;
