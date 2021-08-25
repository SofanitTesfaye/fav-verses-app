import { Route, Link } from "react-router-dom";
import Form from "./Form";

function Verses(props) {
  const { title, description } = props.verses.fields;
  return ( 
        <div class="container">
          <div className="box1">
            <div className="versesBox">
              <h3 className="title">{title}</h3>
              <p className="description">{description}</p>
            </div>
          </div>
          <div className="box2">
            <button style={{ backgroundColor: "brown" }}>
              <Link to={`/edit/${props.verses.id}`}>Edit</Link>
            </button>
          </div>
        </div>
  
  );
}
export default Verses;
