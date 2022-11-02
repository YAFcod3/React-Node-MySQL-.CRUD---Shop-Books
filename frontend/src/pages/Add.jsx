import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






const Add = () => {


  const navigate = useNavigate()


  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  })

  const handleChange = (e) => {
    setBook((prev) => (
      { 
        ...prev, 
        [e.target.name]: e.target.value 
      })
    )

  }



  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8800/books", book)
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className="form">
      <h2>Add new book</h2>
      <input type="text" placeholder="title" onChange={handleChange} name="title" />
      <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
      <input type="number" placeholder="price" onChange={handleChange} name="price" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover" />

      <button onClick={handleClick}>Add</button>
    </div>


  );
}

export default Add;