import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import AddUser from './components/AddUser/AddUser';

function App() {

  const [data ,setData] = useState([])

  const getAllUserAxios = () => {

    axios.get('http://localhost:3001/users').then(
      (res) => {
        const {allUsers} = res.data
        console.log('allUsers from axios' , allUsers)
        setData(allUsers)
      }
    ).catch(
      (err) => {
        console.log('err from axios' , err.message)
      }
    )
  }

  useEffect(() => {

        getAllUserAxios();
  },[])

  const allUsersHTML = data.map((user:any , index) => {
    return(
      <p key={user.id}> 
        User-{index} := {user.email}
      </p>
    )
  })

  return (
    
    <div>
      <p> HTTP </p>
      {allUsersHTML}
      <AddUser getAllUserAxios={getAllUserAxios}/>
    </div>  
  );
}

export default App;
