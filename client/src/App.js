import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Verses from "./Components/Verses";
import "./App.css";
import { baseURL, config } from "./services";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  const [verses, setVerses] = useState([]);
  useEffect(() => {
    const fetchVerses = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setVerses(resp.data.records);
    };
    fetchVerses();
  }, []);
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
      <div className="titleVerse">
        New Testament
        <Link style={{margin: 200}} to="/new">Add New Verse</Link>
        </div>
        <br />
        {verses.map((verses, index) => {
          return <Verses key={index} verses={verses} />;
        })}
         
      </Route>

      <Route path="/new">
        <Form />
      </Route>

      <Route path="/edit/:id">
        <Form verses={verses} />
      </Route>
    </>
  );
}

export default App;
