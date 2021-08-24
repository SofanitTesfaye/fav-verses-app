import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      
        <Link to="/verses">Verses</Link>
      </nav>
  )
}
export default Nav