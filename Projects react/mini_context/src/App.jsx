

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {

  return (
    <UserContextProvider >
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
