import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
