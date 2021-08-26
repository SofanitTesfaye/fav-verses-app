import { Link } from "react-router-dom";

function Home() {
  return (
    <body>
      <section>
        <div className="card">
          <h2>FAVORITE BIBLE VERSES</h2>
          <h5>
            DO YOU WANT TO EXPAND YOUR BIBLE KNOWLEDGE? HERE IS THE APP WHICH
            WILL HELP YOU MEMORIZE YOUR FAVORITE BIBLE VERSES!
          </h5>
          <Link to={"/verses"}>
          <button className="reabMeButton">Read Verses</button>
        </Link>
            
        </div>
      </section>

    </body>
  );
}

export default Home;
