import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import AddForm from "./Components/AddForm";
import EditForm from "./Components/EditForm";
import Verses from "./Components/Verses";
import "./App.css";
import { baseURL, config } from "./services";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  const [verses, setVerses] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchVerses = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setVerses(resp.data.records);
    };
    fetchVerses();
  }, [toggle]);
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <Route path="/" exact>
        <Home />
      </Route>
      <br />
      <br />

      <Route path="/verses">
        <div className="titleVerse">New Testament</div>
        <div className="addnew">
          <Link style={{ margin: 200 }} to="/new">
            Add New Verse
          </Link>
        </div>
        <br />
        {verses.map((verses, index) => {
          return <Verses key={index} verses={verses} />;
        })}
      </Route>

      <Route path="/new">
        <AddForm setToggle={setToggle} />
      </Route>

      <Route path="/edit/:id">
        <EditForm verses={verses} setToggle={setToggle} />
      </Route>
    </>
  );
}

export default App;
