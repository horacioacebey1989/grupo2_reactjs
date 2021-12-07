import React,{ useState, useEffect } from 'react'
import "./serv_Restaurante.css"
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material"; 


export default function Serv_Restaurante(){
    const [GetRestaurantes, setGetRestaurantes] = useState([]);
    const [nombre, setNombre] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    const [direccion, setDireccion] = React.useState("");
    const [telefono, setTelefono] = React.useState("");
    const [nit, setNit] = React.useState("");
    
    const handleNombre = (e) => {
        setNombre(e.target.value);
        console.log(nombre);
      };

    const handleDescripcion = (e) => {
        setDescripcion(e.target.value);
        console.log(descripcion);
      };
      
    const handleDireccion = (e) => {
        setDireccion(e.target.value);
        console.log(direccion);
    };

    const handleTelefono = (e) => {
        setTelefono(e.target.value);
        console.log(telefono);
    };

    const handleNit = (e) => {
        setNit(e.target.value);
        console.log(nit);
    };

    const handleSubmit =()=>{
        if(nombre != '' ){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    res_nombre: nombre,
                    res_descripcion: descripcion,
                    res_direccion: direccion,
                    res_telefono: telefono,
                    res_nit: nit,
                })
            }
            fetch('http://localhost:3800/api/addserv_restaurante',requestInit)

            .then(res => res.json())
            .then(res => {
                if(res){console.log(res.nombre);}
            })
    
        }
        else{ alert('Introduzca todos los campos');
        }
    }


    const [id, setID] = React.useState("");
    const [nombre2, setNombre2] = React.useState("");
    const [descripcion2, setDescripcion2] = React.useState("");
    const [direccion2, setDireccion2] = React.useState("");
    const [telefono2, setTelefono2] = React.useState("");
    const [nit2, setNit2] = React.useState("");

      const handleID = (e) => {
        setID(e.target.value);
      };
      const handleNombre2 = (e) => {
        setNombre2(e.target.value);
      };
      const handleDescripcion2 = (e) => {
        setDescripcion2(e.target.value);
      };
      const handleDireccion2 = (e) => {
        setDireccion2(e.target.value);
      };
      const handleTelefono2 = (e) => {
        setTelefono2(e.target.value);
      };
      const handleNit2 = (e) => {
        setNit2(e.target.value);
      };


      const handleEdit = () =>{
        if(id != ''){
            const requesInit ={
                method : 'PUT',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    res_nombre: nombre2,
                    res_descripcion: descripcion2,
                    res_direccion: direccion2,
                    res_telefono: telefono2,
                    res_nit: nit2,
                })
            }
            fetch('http://localhost:3800/api/updateserv_restaurante/'+id,requesInit)
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


    useEffect(() => {
        const getRestaurantes = ()=>{
            fetch('http://localhost:3800/api/getRestaurantes')
            .then(res => res.json())
            .then(res => {
                if(res){
                    setGetRestaurantes(res.serv_restaurantes);
                   // setTipoTurismosend(res.TipoTurismos._id);
                    console.log(res.serv_restaurantes);
                }
            })
        }
        getRestaurantes()
    }, [])


return(
    <div className='servRestaurante'>
    <h1>Crear servRestaurantes</h1>
    <form className='newservRestauranteForm' onSubmit={handleSubmit}>
    <div className='newservRestauranteItem'>
        <label>Elegir el servRestaurante correspondiente</label>
        </div>
        <div className='newservRestauranteItem'>
                <TextField
                               
                    placeholder="Coloque Nombre" variant="outlined" fullWidth  required
                    InputLabelProps={{
                    style: {  fontFamily: "Arial", color: "black", },
                        }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}
                        onChange={(e) => {
                        handleNombre(e);
                        }}
                />
                <TextField
                               
                    placeholder="Coloque Descripcion" variant="outlined" fullWidth  required
                    InputLabelProps={{
                    style: {  fontFamily: "Arial", color: "black", },
                        }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}
                        onChange={(e) => {
                        handleDescripcion(e);
                        }}
                />
                <TextField
                               
                    placeholder="Coloque Direccion" variant="outlined" fullWidth  required
                    InputLabelProps={{
                    style: {  fontFamily: "Arial", color: "black", },
                        }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}
                        onChange={(e) => {
                        handleDireccion(e);
                        }}
                />
                <TextField
                               
                    placeholder="Coloque Telefono" variant="outlined" fullWidth   type="number"
                    InputLabelProps={{
                    style: {  fontFamily: "Arial", color: "black", },
                        }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}
                        onChange={(e) => {
                        handleTelefono(e);
                        }}
                />
                <TextField
                               
                    placeholder="Coloque Nit" variant="outlined" fullWidth  type="number"
                    InputLabelProps={{
                    style: {  fontFamily: "Arial", color: "black", },
                        }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}
                        onChange={(e) => {
                        handleNit(e);
                        }}
                />
            </div>
            <button className='newservRestauranteButton'>Guardar</button>
    </form>
    


    <h1>Editar Restaurantes</h1>
    <form className='newtipoTurismoForm' onSubmit={handleEdit} >
    <div className='newtipoTurismoItem'>
        <label>Elegir el id correspondiente</label>
    </div>
        <div className='newtipoTurismoItem'>
                            <TextField
                               
                               placeholder="Coloque ID" variant="outlined" fullWidth  required
                               InputLabelProps={{
                               style: {  fontFamily: "Arial", color: "black", },
                                   }}
                               inputProps={{
                                   style: {
                                   fontFamily: "Arial",
                                   color: "black",
                                   },
                                   }}
                                   onChange={(e) => {
                                   handleID(e);
                                   }}
                           />   
                            <TextField
                               
                               placeholder="Coloque Nombre" variant="outlined" fullWidth  required
                               InputLabelProps={{
                               style: {  fontFamily: "Arial", color: "black", },
                                   }}
                               inputProps={{
                                   style: {
                                   fontFamily: "Arial",
                                   color: "black",
                                   },
                                   }}
                                   onChange={(e) => {
                                   handleNombre2(e);
                                   }}
                           />
                           <TextField
                                          
                               placeholder="Coloque Descripcion" variant="outlined" fullWidth  required
                               InputLabelProps={{
                               style: {  fontFamily: "Arial", color: "black", },
                                   }}
                               inputProps={{
                                   style: {
                                   fontFamily: "Arial",
                                   color: "black",
                                   },
                                   }}
                                   onChange={(e) => {
                                   handleDescripcion2(e);
                                   }}
                           />
                           <TextField
                                          
                               placeholder="Coloque Direccion" variant="outlined" fullWidth  required
                               InputLabelProps={{
                               style: {  fontFamily: "Arial", color: "black", },
                                   }}
                               inputProps={{
                                   style: {
                                   fontFamily: "Arial",
                                   color: "black",
                                   },
                                   }}
                                   onChange={(e) => {
                                   handleDireccion2(e);
                                   }}
                           />
                           <TextField
                                          
                               placeholder="Coloque Telefono" variant="outlined" fullWidth   type="number"
                               InputLabelProps={{
                               style: {  fontFamily: "Arial", color: "black", },
                                   }}
                               inputProps={{
                                   style: {
                                   fontFamily: "Arial",
                                   color: "black",
                                   },
                                   }}
                                   onChange={(e) => {
                                   handleTelefono2(e);
                                   }}
                           />
                           <TextField
                                          
                               placeholder="Coloque Nit" variant="outlined" fullWidth  type="number"
                               InputLabelProps={{
                               style: {  fontFamily: "Arial", color: "black", },
                                   }}
                               inputProps={{
                                   style: {
                                   fontFamily: "Arial",
                                   color: "black",
                                   },
                                   }}
                                   onChange={(e) => {
                                   handleNit2(e);
                                   }}
                            />
        </div>
            <button className='newtipoTurismoButton'>Editar</button>
    </form>

</div>
)










}