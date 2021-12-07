import React from 'react'
import "./hotel.css"
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocalActivity, Publish} from '@material-ui/icons'

import { Link, useLocation } from 'react-router-dom'

export default function hotel() {
    const location = useLocation();
    const servHotel = location.state.hotelSend;

    const [nombre, setNombre] = useState(servHotel.nombre);
    
    const handleNombre = (e) =>{
        setNombre(e.target.value);
    }

    const handleSubmit = () =>{
        if(nombre !== ''){
            const requesInit ={
                method : 'PUT',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    nombre: nombre,
                })
            }
            fetch('http://localhost:3900/api/updateServHotel/'+servHotel._id,requesInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    alert("Registro completado");
                }
            })
        }
        else{
            alert('Introduzca los valores!');
        }
    }

    return (
        <div className='hotel'>
        <div className='hotelTitleContainer'>
            <h1 className='hotelTitle'>Editar Hotel</h1>
            <Link to='/newHotel'>
                <button className='hotelAddButton'>Nuevo</button>
            </Link>
        </div>
        <div className='hotelContainer'>
                <div className='hotelShow'>
                    <div className='hotelShowTop'>
                        <img className='hotelShowPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                        <div className='hotelShowTopTitle'>
                            <span className='hotelShowHotelName'>Prueba nombre</span>
                            <span className='hotelShowHotelTitle'>Descripcion de hotel</span>
                        </div>
                    </div>
                    <div className='hotelShowBottom'>
                        <span className='hotelShowTitle'>Descripcion</span>
                        <div className='hotelShowInfo'>
                            <PermIdentity className='hotelShowIcon'/>
                            <span className='hotelShowInfoTitle'>Nombre de hotel</span>
                        </div>
                        <div className='hotelShowInfo'>
                            <CalendarToday className='hotelShowIcon'/>
                            <span className='hotelShowInfoTitle'>11/12/2021</span>
                        </div>
                        
                        <span className='hotelShowTitle'>Contacto</span>
                        <div className='hotelShowInfo'>
                            <PhoneAndroid className='hotelShowIcon'/>
                            <span className='hotelShowInfoTitle'>765675675</span>
                        </div>
                        <div className='hotelShowInfo'>
                            <MailOutline className='hotelShowIcon'/>
                            <span className='hotelShowInfoTitle'>test@test.com</span>
                        </div>
                         <div className='hotelShowInfo'>
                            <LocalActivity className='hotelShowIcon'/>
                            <span className='hotelShowInfoTitle'>Tarija</span>
                        </div>
                    </div>
                </div>
                <div className='hotelUpdate'>
                    <span className='hotelUpdateTitle'>Editar</span>
                    <form className='hotelUpdateForm' onSubmit={handleSubmit} action='/users'>
                        <div className='hotelUpdateLeft'>
                            <div className='hotelUpdateItem'>
                                <label>Tipo Nombre</label>
                                <input type='text' placeholder='Nombre' value={nombre} onChange={handleNombre} className='hotelUpdateInput'/>
                            </div> 
                            <button style={{marginTop:'20px'}} className='hotelAddButton'>Editar</button>
                        </div>
                        
                        <div className='hotelUpdateRight'>
                            <div className='hotelUpdateUpload'>
                                <img className='hotelUpdatePic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                                <label htmlFor='file'><Publish/></label>
                                <input type='file' id='file' style={{display:"none"}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
