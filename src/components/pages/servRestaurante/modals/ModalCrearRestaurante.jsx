import React, { useState } from "react";
import Select from 'react-select';
//import "../../pages/tipoTurismo/tablaTurismo.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
//Un efecto de animación al abrir el modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
//Inicia el proyecto
export default function ModalCrearRestaurante() {
  //Booleano para definir si esta o no abierto
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //Las variables/datos que tenemos dentro de nuestra tabla
  const [idProveedor, setidProveedor] = React.useState("");
  const [idServicio, setidServicio] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [nit, setNit] = React.useState("");

  const handleProveedor = (e) => {
    setidProveedor(e.target.value);
    console.log(idProveedor);
  };

  const handleServicio = (e) => {
    setidServicio(e.target.value);
    console.log(idServicio);
  };

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

  const handleSubmit = () => {
    if (nombre != "") {
      const requestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          res_nombre: nombre,
          res_descripcion: descripcion,
          res_direccion: direccion,
          res_telefono: telefono,
          res_nit: nit,
        }),
      };
      fetch("http://localhost:3800/api/addserv_restaurante", requestInit)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            console.log(res.nombre);
          }
        });
    } else {
      alert("Introduzca todos los campos");
    }
  };
  //Aqui empieza el HTML
  return (
    <div className="servRestaurante">
      <h1>Crear servRestaurantes</h1>
      <form className="newservRestauranteForm" onSubmit={handleSubmit}>
        <div className="newservRestauranteItem">
          <label>Elegir el servRestaurante correspondiente</label>
        </div>
        <div className="newservRestauranteItem">
        <div>
                <button onClick={this.onclicksubmit} >Fetch data from 5000 : </button>
                {this.state.res.map((user, i) => <div key={i}>{user.name}</div>)}
            </div>

          <TextField
            placeholder="Coloque Nombre"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              style: { fontFamily: "Arial", color: "black" },
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
            placeholder="Coloque Descripcion"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              style: { fontFamily: "Arial", color: "black" },
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
            placeholder="Coloque Direccion"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              style: { fontFamily: "Arial", color: "black" },
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
            placeholder="Coloque Telefono"
            variant="outlined"
            fullWidth
            type="number"
            InputLabelProps={{
              style: { fontFamily: "Arial", color: "black" },
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
            placeholder="Coloque Nit"
            variant="outlined"
            fullWidth
            type="number"
            InputLabelProps={{
              style: { fontFamily: "Arial", color: "black" },
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
        <button className="newservRestauranteButton">Guardar</button>
      </form>
    </div>
  );
}