import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Details } from './components/Details/Details'
import { List } from './components/List/List'


function App() {
  // Инициализация состояния для хранения выбранного пользователя
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app-container">
      <List onSelectUser={setSelectedUser} />
      {selectedUser && <Details info={selectedUser} />}
    </div>
  );
}

export default App
