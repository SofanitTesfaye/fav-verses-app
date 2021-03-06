import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";
function EditForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.id && props.verses.length > 0) {
      const versesToEdit = props.verses.find(
        (verses) => params.id === verses.id
      );
      if (versesToEdit) {
        setTitle(versesToEdit.fields.title);
        setDescription(versesToEdit.fields.description);
      }
    }
  }, [params.id, props.verses]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newVerses = {
      title,
      description,
    };
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newVerses }, config);
    }
    props.setToggle((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="editVerse" >Edit this verse</h2>
      <div className="formTitle">
        <lable className="titleTwo" htmlFor="title">
          Title{" "}
        </lable>
      </div>
      <br />
      <div className="formInput">
        <input
          className="one"
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <br />
      <div className="formDescription">
        <lable className="titleThree" htmlFor="description">
          Description{" "}
        </lable>
      </div>
      <br />
      <div className="textDescription">
        <textarea
          className="two"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <br />
      <div className="formBtn">
        <button className="btnTwo" type="submit">
          Update
        </button>
      </div>
    </form>
  );
}
export default EditForm;
