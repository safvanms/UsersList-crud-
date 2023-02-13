import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './User.css'

const initial = {
  id: '',
  name: '',
  designation: '',
  place: '',
}

export default function User() {
  const [datas, setDatas] = useState('')
  const [formData, setFormData] = useState(initial)
  const [editId, setEditId] = useState(null)
  const [editMode, setEditMode] = useState(false)

  //user details getting from json server by axios

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((res) => {
      setDatas(res.data)
    })
  }, [])

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (editMode === true) {
      updateItem()
    } else {
      await axios.post('http://localhost:3000/users', formData)
      setDatas([...datas, formData])
      setFormData(initial)
    }
  }

  // editing and updating the user list

  const handleEdit = (ID) => {
    setEditId(true)
    let editItem = datas.find((data) => {
      return data.id === ID
    })
    setFormData(editItem)
    setEditId(ID)
    setEditMode(true)
  }

  // updating here

  function updateItem() {
    let updates = {
      id: editId,
      ...formData,
    }
    const setup = axios.put(`http://localhost:3000/users/${editId}`, updates)
    setDatas(
      datas.map((element) => {
        if (element?.id === editId) {
          return { ...formData, setup }
        }
        return element
      }),
    )
    setEditId(null)
    setEditMode(false)
    setFormData(initial)
  }

  // for delete a user

  function handleDelete(id) {
    const delteItem = datas.filter((data) => {
      return data.id !== id
    })
    setDatas(delteItem)
  }

  return (
    <>
    <div className="head">
	<h1>Users</h1>
    </div>
    
      <div className="users-page">
        <div className="details">
          {datas
            ? datas.map(({ id, name, designation, place }) => {
                return (
                  <div className="container">
                    <p>{id}</p>
                    <p>{name}</p>
                    <p>{designation}</p>
                    <p>{place}</p>
                    <button onClick={() => handleEdit(id)}>Edit Details</button>
                    <br />
                    <button className="delete" onClick={() => handleDelete(id)}>
                      Dlete User
                    </button>
                    <br />
                  </div>
                )
              })
            : ''}
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
              type="text"
              value={formData.id}
              onChange={handleChange}
              name="id"
              required
            />
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required
            />
            <label>Designation:</label>
            <input
              type="text"
              placeholder="Enter Designation"
              onChange={handleChange}
              value={formData.designation}
              name="designation"
              required
            />
            <label>Place:</label>
            <input
              type="text"
              placeholder="Enter Place"
              onChange={handleChange}
              value={formData.place}
              name="place"
              required
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
