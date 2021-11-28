import React,{ useState, useEffect } from 'react'
import "./newProveedor.css"

export default function NewProveedor() {

    const [pro_nombre, setProveedorName] = useState("");
    const [pro_ci, setCi] = useState("");
    const [pro_telefono, setTelefono] = useState([]);
    const [pro_email, setEmail] = useState("");
    const [idServicio, setIdServicio] = useState("");
    const [idServicioSend, setIdServicioSend] = useState("");

    useEffect(() => {
        const getTipo = ()=>{
            fetch('http://localhost:3800/api/getServicio')
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.tipo);
                    setIdServicio(res.tipo);
                    setIdServicioSend(res.tipo[0]._id);
                }
            })
        }
        getTipo()
    }, [])

    const handleNombre = (e) =>{
        setProveedorName(e.target.value);
    }

    const handleCi = (e) =>{
        setCi(e.target.value);
    }

    const handleTelefono = (e) =>{
        setTelefono(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleServicio = (e) =>{
        setIdServicioSend(e.target.value);
    }

    const handleSubmit =()=>{
        if(pro_nombre !== '' && pro_ci !== ''){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    pro_nombre: pro_nombre,
                    pro_ci: pro_ci,
                    pro_telefono: pro_telefono,
                    pro_email: pro_email,
                    idServicio: idServicioSend
                })
            }

            fetch('http://localhost:3800/api/addProveedor',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.proveedor);
                }
            })

        }
        else{
            alert('Introduzca todos los campos');
        }
    }

    return (
        <div className='newProveedor'>
            <h1>Nuevo Proveedor</h1>
            <form className='newProveedorForm' onSubmit={handleSubmit}>
                <div className='newProveedorItem'>
                    <label>Nombre</label>
                    <input onChange={handleNombre} value={pro_nombre} type='text' placeholder='Nombre del Proveedor'/>
                </div>
                <div className='newProveedorItem'>
                    <label>CI</label>
                    <input onChange={handleCi} value={pro_ci} type='text' placeholder='CI del Proveedor'/>
                </div>
                <div className='newProveedorItem'>
                    <label>Telefono</label>
                    <input onChange={handleTelefono} value={pro_telefono} type='text' placeholder='Telefono'/>
                </div>
                <div className='newProveedorItem'>
                    <label>Email</label>
                    <input onChange={handleEmail} value={pro_email} type='text' placeholder='Email'/>
                </div>
                <div className='newProveedorItem'>
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
                <button className='newProveedorButton'>Crear</button>
            </form>
        </div>
    )
}