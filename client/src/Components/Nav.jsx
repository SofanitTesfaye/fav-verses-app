import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" style={{margin:50}} >Home </Link>
      
        <Link to="/verses"> Verses</Link>
      </div>
    </nav>
  );
}
export default Nav;
