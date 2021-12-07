import React from 'react'
import "./proveedor.css"
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocalActivity, Publish} from '@material-ui/icons'

import { Link, useLocation } from 'react-router-dom'

export default function proveedor() {
    const location = useLocation();
    const indvProveedor = location.state.proveedorSend;

    const [nombre, setNombre] = useState(indvProveedor.nombre);
    
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
            fetch('http://localhost:3800/api/updateServAgencia/'+indvProveedor._id,requesInit)
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
        <div className='proveedor'>
        <div className='proveedorTitleContainer'>
            <h1 className='proveedorTitle'>Editar Proveedor</h1>
            <Link to='/newProveedor'>
                <button className='proveedorAddButton'>Nuevo</button>
            </Link>
        </div>
        <div className='proveedorContainer'>
                <div className='proveedorShow'>
                    <div className='proveedorShowTop'>
                        <img className='proveedorShowPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                        <div className='proveedorShowTopTitle'>
                            <span className='proveedorShowProveedorName'>Nombre del Proveedor</span>
                            <span className='proveedorShowProveedorTitle'>Descripcion del Proveedor</span>
                        </div>
                    </div>
                    <div className='proveedorShowBottom'>
                        <span className='proveedorShowTitle'>Descripcion</span>
                        <div className='proveedorShowInfo'>
                            <PermIdentity className='proveedorShowIcon'/>
                            <span className='proveedorShowInfoTitle'>Nombre</span>
                        </div>
                        <div className='proveedorShowInfo'>
                            <CalendarToday className='proveedorShowIcon'/>
                            <span className='proveedorShowInfoTitle'>01/01/2001</span>
                        </div>
                        
                        <span className='proveedorShowTitle'>Contacto</span>
                        <div className='proveedorShowInfo'>
                            <PhoneAndroid className='proveedorShowIcon'/>
                            <span className='proveedorShowInfoTitle'>11223344</span>
                        </div>
                        <div className='proveedorShowInfo'>
                            <MailOutline className='proveedorShowIcon'/>
                            <span className='proveedorShowInfoTitle'>test@test.com</span>
                        </div>
                         <div className='proveedorShowInfo'>
                            <LocalActivity className='proveedorShowIcon'/>
                            <span className='proveedorShowInfoTitle'>Tarija</span>
                        </div>
                    </div>
                </div>
                <div className='proveedorUpdate'>
                    <span className='proveedorUpdateTitle'>Editar</span>
                    <form className='proveedorUpdateForm' onSubmit={handleSubmit} action='/users'>
                        <div className='proveedorUpdateLeft'>
                            <div className='proveedorUpdateItem'>
                                <label>Tipo Nombre</label>
                                <input type='text' placeholder='Nombre' value={nombre} onChange={handleNombre} className='proveedorUpdateInput'/>
                            </div> 
                            <button style={{marginTop:'20px'}} className='proveedorAddButton'>Editar</button>
                        </div>
                        
                        <div className='proveedorUpdateRight'>
                            <div className='proveedorUpdateUpload'>
                                <img className='proveedorUpdatePic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
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