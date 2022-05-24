import './App.css';
import axios from 'axios';
import CrudFrom from './Components/CrudFrom'
import CrudList from './Components/CrudList'
import { useEffect, useState } from 'react';



function App() {

  const [ users, setUsers ] = useState([]);
  const [ selectUser, setSelectUsers ] = useState(null)
  
   useEffect(() => {
     axios.get('https://users-crud1.herokuapp.com/users/')
     .then(res => setUsers(res.data))

   }, [])
  
   const getCrud = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))

   }

   const addCrud = crudItem => {
    axios.post('https://users-crud1.herokuapp.com/users/', crudItem)
    .then(() => getCrud())
    .catch(error => console.log(error.response))

   }

   const deleteCrud = id =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getCrud())
   }
   
   const selectNewUser = user =>{
    setSelectUsers(user);
  }

  const deselectUser = () => setSelectUsers(null);

   const selectCrud = selectCrud => {
    axios.put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`, selectCrud)
    .then(() => getCrud())
   } 

  return (
    <div className="App">
      <CrudFrom 
      addCrud={addCrud}
      selectUser={selectUser}
      selectCrud={selectCrud}
      deselectUser={deselectUser}/>
      

 
      <div className='component-container'>
      <CrudList 
      cruds={users}
      deleteCruds={deleteCrud}
      newUser={selectNewUser}/>

      </div>

    </div>
  );
}

export default App; 
