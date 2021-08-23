import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import "./App.css";
import { baseURL, config } from "./services";

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
        <Link to="/">Home</Link>
        <Link to="/verses">Verses</Link>
        <Link to="/new">Form</Link>
      </nav>
      <Route path="/" exact>
        <h1>home</h1>
      </Route>
      <Route path="/verses">
        {verses.map((verses, index) => {
          const { title, description } = verses.fields;
          return (
            <article>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          );
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
