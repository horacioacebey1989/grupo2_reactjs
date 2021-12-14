import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/topbar'
import Home from './components/pages/home/home'
import UserList from './components/userList/userList'
import User from './components/pages/user/user'
import NewUser from './components/pages/user/newUser'
import TipoTurismo from './components/pages/tipoTurismo/tipoTurismo'
import TablaTurismo from './components/pages/tipoTurismo/tablaTurismo';
import TablaRestaurante from  './components/pages/servRestaurante/tablaRestaurante';
import Main from './components/pages/main/main'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Topbar />
        <div className='container'>   
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/users' element={<UserList/>}/>
              <Route path='/user/:userId' element={<User/>}/>
              <Route path='/newUser' element={<NewUser/>}/>
              <Route path='/tablaTurismo' element={<TablaTurismo/>}/>
              <Route path='/tablaRestaurante' element={<TablaRestaurante/>}/>
              <Route path='/main' element={<Main/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
