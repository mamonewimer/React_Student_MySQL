import React from 'react'
import  { useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const Navigate = useNavigate()
    const {id} =useParams()
    function handleSubmit (event){
        event.preventDefault();
        axios.put("http://localhost:8081/update/"+id,{name,email})
        .then(res=>{
            console.log(res)
            Navigate('/')
        }).catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
        <div className='w-50 bg-white rounded p-3' >
            <form onSubmit={handleSubmit} > 
                <h2>Update Student</h2>
                <div className='mb-2' >
                    <label htmlFor='' >Name</label>
                    <input type='text' placeholder='Enter Name ...' className='form-control'
                    onChange={e => SetName (e.target.value)}
                    />
                    
                </div>
                <div className='mb-2' >
                <label htmlFor='' >Email</label>
                <input type='email' placeholder='Enter Email ...' className='form-control' 
                    onChange={e => SetEmail (e.target.value)}
                    />
                </div>
                <button className='btn btn-success' >Update</button>
            </form>

        </div>
    </div>
  )
}

export default Update