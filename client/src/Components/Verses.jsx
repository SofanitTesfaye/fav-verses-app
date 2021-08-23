import { Link } from "react-router-dom";
function Verses(props) {
  const { title, description } = props.verses.fields;
  return (
  <article>
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/edit/${props.verses.id}`}>Edit</Link>
   </article>
  )
}
export default Verses