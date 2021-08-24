import { Route, Link } from "react-router-dom";
import Form from './Form'

function Verses(props) {
  const { title, description } = props.verses.fields;
  return (
    <>
      <nav>
        <Link to="/new">Add</Link>
      </nav>
     
    <article>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/edit/${props.verses.id}`}>Edit</Link>
      </article>
      </>
  )
}
export default Verses