import {React, useRef, useState, useMemo, useCallback} from 'react';
import './App.css'
import UserList from './UserList';
import CreateUser from './CreateUser'

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...")
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    userName: '',
    email: '',
  })
  const { username, email } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })},
    [inputs]);
  
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'ghdic',
        email: 'public.ghdic@gmial.com',
        active: true,
    },
    {
        id: 2,
        username: 'ghdic77',
        email: 'public.ghdic77@gmial.com',
        active: false,
    },
    {
        id: 3,
        username: 'ghdij',
        email: 'public.ghdij@gmial.com',
        active: false,
    },
])

  const nextID = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextID.current,
      username,
      email
    }
    setUsers(users => users.concat(user)) // [...users, user] or users.concat(user)
    setInputs({
      username: '',
      email: ''
    })
    nextID.current += 1;
  },
  [username, email])

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  },
  [])

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id ? { ...user, active: !user.active } : user
    ))
  },
  [])

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;
