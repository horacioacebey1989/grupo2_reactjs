import './App.css';
import Topbar from './components/topbar/topbar'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/pages/home/home'
import UserList from './components/userList/userList'
import User from './components/pages/user/user'
import NewUser from './components/pages/user/newUser'
import HotelList from './components/hotelList/hotelList'
import Hotel from './components/pages/hotel/hotel'
import NewHotel from './components/pages/hotel/newHotel'

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
              <Route path='/hoteles' element={<HotelList/>}/>
              <Route path='/hotel/:hotelId' element={<Hotel/>}/>
              <Route path='/newHotel' element={<NewHotel/>}/>
              
          </Routes>
      </div>
    </Router>
  );
}

export default App;
