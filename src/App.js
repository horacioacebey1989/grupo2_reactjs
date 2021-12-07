import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/topbar'
import SideBar from './components/sidebar/sidebar'
import Home from './components/pages/home/home'
import UserList from './components/userList/userList'
import User from './components/pages/user/user'
import NewUser from './components/pages/user/newUser'
import TipoTurismo from './components/pages/tipoTurismo/tipoTurismo'
import Restaurante from './components/pages/serv_Restaurante/serv_Restaurante'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return ( <
        Router >
        <
        Topbar / >
        <
        div className = 'container' >
        <
        SideBar / >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/users'
        element = { < UserList / > }
        /> <
        Route path = '/user/:userId'
        element = { < User / > }
        /> <
        Route path = '/newUser'
        element = { < NewUser / > }
        /> <
        Route path = '/tipoTurismo'
        element = { < TipoTurismo / > }
        /> <
        Route path = '/serv_Restaurante'
        element = { < Restaurante / > }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}

export default App;