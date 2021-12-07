import React from 'react'
import "./agencia.css"
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocalActivity, Publish} from '@material-ui/icons'

import { Link, useLocation } from 'react-router-dom'

export default function agencia() {
    const location = useLocation();
    const servAgencia = location.state.agenciaSend;

    const [nombre, setNombre] = useState(servAgencia.nombre);
    
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
            fetch('http://localhost:3800/api/updateServAgencia/'+servAgencia._id,requesInit)
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
        <div className='agencia'>
        <div className='agenciaTitleContainer'>
            <h1 className='agenciaTitle'>Editar Agencia</h1>
            <Link to='/newAgencia'>
                <button className='agenciaAddButton'>Nuevo</button>
            </Link>
        </div>
        <div className='agenciaContainer'>
                <div className='agenciaShow'>
                    <div className='agenciaShowTop'>
                        <img className='agenciaShowPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                        <div className='agenciaShowTopTitle'>
                            <span className='agenciaShowAgenciaName'>Nombre de agencia</span>
                            <span className='agenciaShowAgenciaTitle'>Descripcion de agencia</span>
                        </div>
                    </div>
                    <div className='agenciaShowBottom'>
                        <span className='agenciaShowTitle'>Descripcion</span>
                        <div className='agenciaShowInfo'>
                            <PermIdentity className='agenciaShowIcon'/>
                            <span className='agenciaShowInfoTitle'>Nombre</span>
                        </div>
                        <div className='agenciaShowInfo'>
                            <CalendarToday className='agenciaShowIcon'/>
                            <span className='agenciaShowInfoTitle'>01/01/2001</span>
                        </div>
                        
                        <span className='agenciaShowTitle'>Contacto</span>
                        <div className='agenciaShowInfo'>
                            <PhoneAndroid className='agenciaShowIcon'/>
                            <span className='agenciaShowInfoTitle'>11223344</span>
                        </div>
                        <div className='agenciaShowInfo'>
                            <MailOutline className='agenciaShowIcon'/>
                            <span className='agenciaShowInfoTitle'>test@test.com</span>
                        </div>
                         <div className='agenciaShowInfo'>
                            <LocalActivity className='agenciaShowIcon'/>
                            <span className='agenciaShowInfoTitle'>Tarija</span>
                        </div>
                    </div>
                </div>
                <div className='agenciaUpdate'>
                    <span className='agenciaUpdateTitle'>Editar</span>
                    <form className='agenciapdateForm' onSubmit={handleSubmit} action='/users'>
                        <div className='agenciaUpdateLeft'>
                            <div className='agenciaUpdateItem'>
                                <label>Tipo Nombre</label>
                                <input type='text' placeholder='Nombre' value={nombre} onChange={handleNombre} className='agenciaUpdateInput'/>
                            </div> 
                            <button style={{marginTop:'20px'}} className='agenciaAddButton'>Editar</button>
                        </div>
                        
                        <div className='agenciaUpdateRight'>
                            <div className='agenciaUpdateUpload'>
                                <img className='agenciaUpdatePic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
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