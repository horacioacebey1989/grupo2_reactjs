import React,{ useState, useEffect } from 'react'
import "./newHotel.css"

export default function NewHotel() {

    const [nombre, setHotel] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [direccion, setDireccion] = useState([]);
    const [telefono, setTelefono] = useState("");
    const [nit, setNit] = useState("");
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");
    const [idProveedor, setIdProveedor] = useState("");
    const [idProveedorSend, setIdProveedorSend] = useState("");
    const [idServicio, setIdServicio] = useState("");
    const [idServicioSend, setIdServicioSend] = useState("");

    useEffect(() => {
        const getTipoS = ()=>{
            fetch('http://localhost:3900/api/getTipoServicio')
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.tipo);
                    setIdServicio(res.tipo);
                    setIdServicioSend(res.tipo[0]._id);
                }
            })
        }
        getTipoS()
    }, [])

    useEffect(() => {
        const getTipoP = ()=>{
            fetch('http://localhost:3900/api/getIndvProveedor')
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.tipo);
                    setIdProveedor(res.tipo);
                    setIdProveedorSend(res.tipo[0]._id);
                }
            })
        }
        getTipoP()
    }, [])

    const handleNombre = (e) =>{
        setHotel(e.target.value);
    }

    const handleDescripcion = (e) =>{
        setDescripcion(e.target.value);
    }

    const handleDireccion = (e) =>{
        setDireccion(e.target.value);
    }

    const handleTelefono = (e) =>{
        setTelefono(e.target.value);
    }

    const handleNit = (e) =>{
        setNit(e.target.value);
    }

    const handleLatitud = (e) =>{
        setLatitud(e.target.value);
    }

    const handleLongitud = (e) =>{
        setLongitud(e.target.value);
    }

    const handleServicio = (e) =>{
        setIdServicioSend(e.target.value);
    }

    const handleProveedor = (e) =>{
        setIdProveedorSend(e.target.value);
    }

    const handleSubmit =()=>{
        if(nombre !== '' && direccion !== '' && telefono !== '' && nit !== '' && latitud !== '' && longitud !== ''){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    hotel_nombre : nombre,
                    hotel_descripcion : descripcion,
                    hotel_direccion : direccion,
                    hotel_telefono : telefono,
                    hotel_nit : nit,
                    hotel_latitud : latitud,
                    hotel_longitud : longitud,
                    idServicio : idServicioSend,
                    idProveedor : idProveedorSend
                })
            }

            fetch('http://localhost:3900/api/addServHotel',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.hotel);
                }
            })

        }
        else{
            alert('Introduzca todos los campos');
        }
    }

    return (
        <div className='newHotel'>
            <h1>Nuevo Hotel</h1>
            <form className='newHotelForm' onSubmit={handleSubmit}>
                <div className='newHotelItem'>
                    <label>Nombre</label>
                    <input onChange={handleNombre} value={nombre} type='text' placeholder='Nombre del Hotel'/>
                </div>

                <div className='newHotelItem'>
                    <label>Descripcion</label>
                    <input onChange={handleDescripcion} value={descripcion} type='text' placeholder='Descripcion'/>
                </div>

                <div className='newHotelItem'>
                    <label>Direccion</label>
                    <input onChange={handleDireccion} value={direccion} type='text' placeholder='Direccion'/>
                </div>

                <div className='newHotelItem'>
                    <label>Telefono</label>
                    <input onChange={handleTelefono} value={telefono} type='text' placeholder='Telefono'/>
                </div>

                <div className='newHotelItem'>
                    <label>Nit</label>
                    <input onChange={handleNit} value={nit} type='text' placeholder='NIT'/>
                </div>

                <div className='newHotelItem'>
                    <label>Latitud</label>
                    <input onChange={handleLatitud} value={latitud} type='text' placeholder='latitud del hotel a corregir'/>
                </div>

                <div className='newHotelItem'>
                    <label>Longitud</label>
                    <input onChange={handleLongitud} value={longitud} type='text' placeholder='longitud del hotel a corregir'/>
                </div>

                <div className='newHotelItem'>
                    <label>Seleccionar Tipo Servicio</label>
                    <select onChange={handleServicio}>
                        {
                            idServicio?
                            (idServicio.map(tipo => (
                                <option value={tipo._id}>{tipo.nombre}</option>
                            )))
                            :                            <option></option>
                        }
                    </select>
                </div>

                <div className='newHotelItem'>
                    <label>Seleccionar Proveedor</label>
                    <select onChange={handleProveedor}>
                        {
                            idProveedor?
                            (idProveedor.map(tipo => (
                                <option value={tipo._id}>{tipo.nombre}</option>
                            )))
                            :                            <option></option>
                        }
                    </select>
                </div>

                <button className='newHotelButton'>Crear</button>
            </form>
        </div>
    )
}