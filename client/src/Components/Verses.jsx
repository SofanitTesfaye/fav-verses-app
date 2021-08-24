import { Route, Link } from "react-router-dom";
import Form from './Form'

function Verses(props) {
  const { title, description } = props.verses.fields;
  return (
    <>
      <article>
     <div className="versesBox">  
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
        </div>
        <div className="editBox">
    <Link to={`/edit/${props.verses.id}`}>Edit</Link>
    </div>
      </article>
      </>
  )
}
export default Verses