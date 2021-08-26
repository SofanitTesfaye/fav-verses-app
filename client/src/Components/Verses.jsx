import {  Link } from "react-router-dom";

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
        <Link to={`/edit/${props.verses.id}`}>
          <button className="btn">Edit</button>
        </Link>
      </div>
    </div>
  );
}
export default Verses;
