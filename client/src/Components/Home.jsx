import { Link, Route } from "react-router-dom";
import Verses from "./Verses";

function Home() {
  return (
    <div className="home-container">
      <div className="body" style={{ backgroundImage: "URL('https://i.imgur.com/61lqY0J.jpg')" }} >
        <div className="card">
          <h3>FAVORITE BIBLE VERSES</h3>
          <h5>
            DO YOU WANT TO EXPAND YOUR BIBLE KNOWLEDGE? HERE IS THE APP WHICH
            WILL HELP YOU MEMORIZE YOUR FAVORITE BIBLE VERSES!
          </h5>
          <Link to={"/verses"}>
          <button className="reabMeButton">Read Verses</button>
        </Link>
            
        </div>
      </div>
    </div>
  );
}
export default Home;
