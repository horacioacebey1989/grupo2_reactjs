import React,{ useState, useEffect } from 'react'
import "./tipoTurismo.css"
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material"; 


export default function TipoTurismo(){

    const URLBASE = React.useState("http://localhost:3800/api/");
    const [TipoTurismos, setTipoTurismos] = useState([]);
    const [categoria, setcategoria] = React.useState("");
    const [categoria2, setcategoria2] = React.useState("");
    const [id, setid] = React.useState("");
    const handleId = (e) => {
        setid(e.target.value);
        console.log(id);

      };
      //PUT CUANDO SE SELECCIONA EL ITEM
      const handleEdit = () =>{
        if(id != ''){
            const requesInit ={
                method : 'PUT',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    categoria: categoria2,
                })
            }
            fetch( URLBASE+'updateTipoturismo/'+id,requesInit)
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

    const handlecategoria2 = (e) => {
        setcategoria2(e.target.value);
        console.log(categoria2);

      };

    const handleCategoria = (e) => {
        setcategoria(e.target.value);
        console.log(categoria);

      };

      //POST GENERAL
      const handleSubmit =()=>{
        if(categoria != '' ){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    categoria: categoria,
                })
            }
            fetch('http://localhost:3800/api/addTipoTurismo',requestInit)

            .then(res => res.json())
            .then(res => {
                if(res){console.log(res.categoria);}
            })
    
        }
        else{ alert('Introduzca todos los campos');
        }
    }

    //GET TABLE
    useEffect(() => {
        const getTipoTurismos = ()=>{
            fetch('http://localhost:3800/api/getTipoTurismos')
            .then(res => res.json())
            .then(res => {
                if(res){
                    setTipoTurismos(res.TipoTurismos);
                   // setTipoTurismosend(res.TipoTurismos._id);
                    console.log(res.TipoTurismos);
                }
            })
        }
        getTipoTurismos()
    }, [])

return(
    <div className='tipoTurismo'>
    <h1>Crear tipoTurismos</h1>
    <form className='newtipoTurismoForm' onSubmit={handleSubmit} >
    <div className='newtipoTurismoItem'>
        <label>Elegir el tipoTurismo correspondiente</label>
        </div>
        <div className='newtipoTurismoItem'>
                <TextField
                               
                    placeholder="Coloque Extra Papas"
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{
                    style: {
                        fontFamily: "Arial",
                        color: "black",
                            },
                            }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}

                        onChange={(e) => {
                        handleCategoria(e);
                        }}
                />
            </div>
            <button className='newtipoTurismoButton'>Guardar</button>
    </form>
    <h1>Editar tipoTurismos</h1>
    <form className='newtipoTurismoForm' onSubmit={handleEdit} >
    <div className='newtipoTurismoItem'>
        <label>Elegir el id correspondiente</label>
        </div>
        <div className='newtipoTurismoItem'>
                <TextField
                               
                    placeholder="Editar Extra Papas"
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{
                    style: {
                        fontFamily: "Arial",
                        color: "black",
                            },
                            }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}

                        onChange={(e) => {
                        handleId(e);
                        }}
                />
            </div>
            <div className='newtipoTurismoItem'>
                <TextField
                               
                    placeholder="Coloque Extra Papas"
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{
                    style: {
                        fontFamily: "Arial",
                        color: "black",
                            },
                            }}
                    inputProps={{
                        style: {
                        fontFamily: "Arial",
                        color: "black",
                        },
                        }}

                        onChange={(e) => {
                        handlecategoria2(e);
                        }}
                />
            </div>
            <button className='newtipoTurismoButton'>Guardar</button>
    </form>
</div>
)
}