import React,{ useState, useEffect } from 'react'
import "./newAgencia.css"

export default function NewAgencia() {

    const [nombre, setAgencia] = useState("");
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
            fetch('http://localhost:3800/api/getTipoServicio')
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
            fetch('http://localhost:3800/api/getIndvProveedor')
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
                    agencia_nombre : nombre,
                    agencia_descripcion : descripcion,
                    agencia_direccion : direccion,
                    agencia_telefono : telefono,
                    agencia_nit : nit,
                    agencia_latitud : latitud,
                    agencia_longitud : longitud,
                    idServicio : idServicioSend,
                    idProveedor : idProveedorSend
                })
            }

            fetch('http://localhost:3900/api/addServAgencia',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.agencia);
                }
            })

        }
        else{
            alert('Introduzca todos los campos');
        }
    }

    return (
        <div className='newAgencia'>
            <h1>Nueva Agencia</h1>
            <form className='newAgenciaForm' onSubmit={handleSubmit}>
                <div className='newAgenciaItem'>
                    <label>Nombre</label>
                    <input onChange={handleNombre} value={nombre} type='text' placeholder='Nombre de la agencia'/>
                </div>

                <div className='newAgenciaItem'>
                    <label>Descripcion</label>
                    <input onChange={handleDescripcion} value={descripcion} type='text' placeholder='Descripcion'/>
                </div>

                <div className='newAgenciaItem'>
                    <label>Direccion</label>
                    <input onChange={handleDireccion} value={direccion} type='text' placeholder='Direccion'/>
                </div>

                <div className='newAgenciaItem'>
                    <label>Telefono</label>
                    <input onChange={handleTelefono} value={telefono} type='text' placeholder='Telefono'/>
                </div>

                <div className='newAgenciaItem'>
                    <label>Nit</label>
                    <input onChange={handleNit} value={nit} type='text' placeholder='NIT'/>
                </div>

                <div className='newAgenciaItem'>
                    <label>Latitud</label>
                    <input onChange={handleLatitud} value={latitud} type='text' placeholder='latitud de la agencia'/>
                </div>

                <div className='newAgenciaItem'>
                    <label>Longitud</label>
                    <input onChange={handleLongitud} value={longitud} type='text' placeholder='longitud de la agencia'/>
                </div>

                <div className='newAgenciaItem'>
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

                <div className='newAgenciaItem'>
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

                <button className='newAgenciaButton'>Crear</button>
            </form>
        </div>
    )
}