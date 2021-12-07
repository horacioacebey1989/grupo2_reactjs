import './App.css';
import Topbar from './components/topbar/topbar'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/pages/home/home'
import UserList from './components/userList/userList'
import User from './components/pages/user/user'
import NewUser from './components/pages/user/newUser'
import Agencia from './components/pages/agencia/agencia'
import NewAgencia from './components/pages/agencia/newAgencia'
import Proveedor from './components/pages/proveedor/proveedor'
import NewProveedor from './components/pages/proveedor/newProveedor'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/users' element={<UserList/>}/>
              <Route path='/user/:userId' element={<User/>}/>
              <Route path='/newUser' element={<NewUser/>}/>
              <Route path='/newProveedor' element={<NewProveedor/>}/>
              <Route path='/newAgencia' element={<NewAgencia/>}/>
              <Route path='/proveedores' element={<Proveedor/>}/>
              <Route path='/agencias' element={<Agencia/>}/>
              
          </Routes>
      </div>
    </Router>
  );
}

export default App;
