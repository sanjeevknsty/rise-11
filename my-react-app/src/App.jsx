import './App.css'
import { Routes, Route} from 'react-router'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Menu from './components/Menu'
import Login from './components/Login'
import Signup from './components/Signup'
import Sidebar from './components/Home/Sidebar'

function App() {

  return (
    <>
    {/* HOMe */}
      <Routes>
        {/* <Sidebar/> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  )
}

export default App
