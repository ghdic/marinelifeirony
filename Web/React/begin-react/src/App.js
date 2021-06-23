import {React, useRef, useState} from 'react';
import './App.css'
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './Create'

function App() {
  const [inputs, setInputs] = useState({
    userName: '',
    email: '',
  })
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'ghdic',
        email: 'public.ghdic@gmial.com'
    },
    {
        id: 2,
        username: 'ghdic77',
        email: 'public.ghdic77@gmial.com'
    },
    {
        id: 3,
        username: 'ghdij',
        email: 'public.ghdij@gmial.com'
    },
])

  const nextID = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextID.current,
      username,
      email
    }
    setUsers([...users, user]) // users.concat(user)
    setInputs({
      username: '',
      email: ''
    })
    nextID.current += 1;
  }
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users}/>
    </>
  )
}

export default App;
