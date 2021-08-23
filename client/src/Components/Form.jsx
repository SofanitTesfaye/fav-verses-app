import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL, config } from '../services'
import { useParams } from 'react-router-dom'
function Form(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const params = useParams()

  useEffect(() => {
    if (params.id && props.verses.length > 0) {
      const versesToEdit = props.verses.find(verses => params.id === verses.id)
      if (versesToEdit) {
        setTitle(versesToEdit.fields.title)
        setDescription(versesToEdit.fields.description)
      }
  }
}, [params.id, props.verses])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newVerses = {
      title,
      description
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newVerses}, config)
    } else {
    await axios.post(baseURL, {fields: newVerses }, config)
  }
}
  return (
    <form onSubmit={handleSubmit}>
      <lable htmlFor='title'>Title: </lable>
      <input
        id='title'
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <lable htmlFor='description'>Description: </lable>
      <textarea
        id='description'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type='submit'>Add</button>
   </form>
  )
}
export default Form