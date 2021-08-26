import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function AddForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


    const handleSubmit = async (event) => {
      event.preventDefault();
      const newVerses = {
        title,
        description,
      };

      await axios.post(baseURL, { fields: newVerses }, config);
      props.setToggle((prevState) => !prevState);
      }
    
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="formTitle">What's your favorite verse?</h2>
      <br />
      <div className="verseTitle">
        <lable className="titleTwo" htmlFor="title">
          Title{" "}
        </lable>
      </div>
      <br />
      <div className="formInput">
        <input
          className="one"
          placeholder=" eg.john 1:1"
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
          Add
        </button>
      </div>
    </form>
  );
}
export default AddForm;
