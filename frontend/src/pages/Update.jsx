import { useState } from "react"
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'





const Update= () => {


  const navigate = useNavigate()
  const location=useLocation()
 // console.log(location)
 // console.log(location.pathname.split("/")[2])
  const bookId=location.pathname.split("/")[2]


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
      await axios.put("http://localhost:8800/book/"+bookId,  book)
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className="form">
      <h2>Update new book</h2>
      <input type="text" placeholder="title" onChange={handleChange} name="title" />
      <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
      <input type="number" placeholder="price" onChange={handleChange} name="price" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover" />

      <button className="formButton" onClick={handleClick}>Update</button>
    </div>


  );




}
export default Update;