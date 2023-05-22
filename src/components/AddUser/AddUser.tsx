import React, { memo, useState } from 'react'
import './AddUser.css'
import axios from 'axios';

const AddUser:React.FC<{
    getAllUserAxios: () => void
}> = (
    {
         getAllUserAxios

    }
) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const AddnewUser = () => {
       const newUser = {
             email,
             password,
             id: Math.random(),
             data: new Date()
       }

       console.table(newUser)

       axios({
        method: 'post',
        url: 'http://localhost:3001/add',
        data: newUser
      }).then( 
        (res) => {
            console.log('add res' , res)
            getAllUserAxios()
        }
      ).catch(
        (err) => {
            console.log('add err' , err)
        }
      )
      

       setEmail('');
       setPassword('')
    }

    return (
        <>
        <div className="App1">
            <h1>Add New User From</h1>
            <div className="App2">
            <label htmlFor="email">Enter your email</label>
                <input type="text" id="email"
                 placeholder="Enter your email"
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)} /> 
            </div>
            <br />

            <div className="App2">
            <label htmlFor="password"> Enter your password</label>
                <input type="password" id="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            </div>
            <br />
            <button className='bt-name' onClick={() => AddnewUser()}> Submit </button>
        </>

    )

}

export default AddUser;