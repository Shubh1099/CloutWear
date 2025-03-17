// import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import UserLayout from './components/Layout/UserLayout'
import AdminLayout from './components/Layout/AdminLayout';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<UserLayout/>} >
        {/* User Layout */}
       </Route>
       <Route path="admin" element={<AdminLayout/>}>
      {/* Admin Layout */}
       </Route>
      </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App
