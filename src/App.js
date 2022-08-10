import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Grid from './Grid';

function App() {
  const initial = [];
  const [users, setUsers] = useState(initial);

  const removeUser = (user) => {
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex > -1) {
      const newUsers = [...users.slice(0, userIndex), ...users.slice(userIndex+1)];
      setUsers(newUsers);
    }
  };

  useEffect(() => {
    setUsers(initial);
  }, []);

  return (
    <>
    <Form users={users} setUsers={setUsers}></Form>
    <Grid users={users} removeUser={removeUser}></Grid>
    </>
    
  );
}

export default App;
