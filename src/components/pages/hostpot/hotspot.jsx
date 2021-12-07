import React from 'react'
import "./hotspot.css"
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocalActivity, Publish} from '@material-ui/icons'

import { Link, useLocation } from 'react-router-dom'

export default function hotspot() {
    /*const location = useLocation();
    const marcHotspot = location.state.hotspotSend;

    const [nombre, setNombre] = useState(marcHotspot.nombre);
    
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
            fetch('http://localhost:3800/api/updateMarcHotspot/'+marcHotspot._id,requesInit)
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
        <div className='hotspot'>
        <div className='hotspotTitleContainer'>
            <h1 className='hotspotTitle'>Editar Hotspot</h1>
            <Link >
                <button className='hotspotAddButton'>Nuevo</button>
            </Link>
        </div>
        <div className='hotspotContainer'>
                <div className='hotspotShow'>
                    <div className='hotspotShowTop'>
                        <img className='hotspotShowPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                        <div className='hotspotShowTopTitle'>
                            <span className='hotspotShowHotspotName'>Prueba</span>
                            <span className='hotspotShowHotspotTitle'>Segunda prueba</span>
                        </div>
                    </div>
                    <div className='hotspotShowBottom'>
                        <span className='hotspotShowTitle'>Descripcion</span>
                        <div className='hotspotShowInfo'>
                            <PermIdentity className='hotspotShowIcon'/>
                            <span className='hotspotShowInfoTitle'>Nombre</span>
                        </div>
                        <div className='hotspotShowInfo'>
                            <CalendarToday className='hotspotShowIcon'/>
                            <span className='hotelShowInfoTitle'>11/12/2021</span>
                        </div>
                        
                        <span className='hotspotShowTitle'>Contacto</span>
                        <div className='hotspotShowInfo'>
                            <PhoneAndroid className='hotspotShowIcon'/>
                            <span className='hotspotShowInfoTitle'>765675675</span>
                        </div>
                        <div className='hotspotShowInfo'>
                            <MailOutline className='hotspotShowIcon'/>
                            <span className='hotspotShowInfoTitle'>test@test.com</span>
                        </div>
                         <div className='hotspotShowInfo'>
                            <LocalActivity className='hotspotShowIcon'/>
                            <span className='hotspotShowInfoTitle'>Tarija</span>
                        </div>
                    </div>
                </div>
                <div className='hotspotUpdate'>
                    <span className='hotspotUpdateTitle'>Editar</span>
                    <form className='hotspotUpdateForm' onSubmit={handleSubmit} action='/hotspots'>
                        <div className='hotspotUpdateLeft'>
                            <div className='hotspotUpdateItem'>
                                <label>Tipo Nombre</label>
                                <input type='text' placeholder='Nombre' value={nombre} onChange={handleNombre} className='hotspotUpdateInput'/>
                            </div> 
                            <button style={{marginTop:'20px'}} className='hotspotAddButton'>Editar</button>
                        </div>
                        
                        <div className='hotspotUpdateRight'>
                            <div className='hotspotUpdateUpload'>
                                <img className='hotspotUpdatePic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                                <label htmlFor='file'><Publish/></label>
                                <input type='file' id='file' style={{display:"none"}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )*/
}