
import React, { useState, useEffect } from "react";
import "./turisLugares.css";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import TipoTurismo from "../tipoTurismo/tipoTurismo";

export default function TurisLugares() {
  // const URLBASE = React.useState("http://localhost:3800/api/");
  const [TurisLugares, setTurisLugares] = useState([]);
  const [idProveedor, setidProveedor] = React.useState("");
  const [idAgencia, setidAgencia] = React.useState("");
  const [idTipo_Turismo, setidTipo_Turismo] = React.useState("");
  const [turis_nombre, setturis_nombre] = React.useState("");
  const [turis_descripcion, setturis_descripcion] = React.useState("");
  const [turis_direccion, setturis_direccion] = React.useState("");
  const [turis_telefono, setturis_telefono] = React.useState("");
  const [turis_latitude, setturis_latitude] = React.useState("");
  const [turis_longitud, setturis_longitud] = React.useState("");
  const [id, setid] = React.useState("");
  const handleId = (e) => {
    setid(e.target.value);
    console.log(id);
  };

  //GET TABLA LUGARES TURISTICOS
  useEffect(() => {
    const getTurisLugares = () => {
      fetch("http://localhost:3800/api/getTuris_Lugares")
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setTurisLugares(res.TurisLugares);
            // setTurisLugaresend(res.TurisLugares._id);
            console.log(res.TurisLugares);
          }
        });
    };
    getTurisLugares();
  }, []);
  //POST EN TABLA LUGARES TURISTICOS
  const handleSubmit = () => {
    if (
      (idProveedor != "",
      idAgencia != "",
      idTipo_Turismo != "",
      turis_nombre != "",
      turis_descripcion != "",
      turis_direccion != "",
      turis_latitude != "",
      turis_longitud != "")
    ) {
      const requestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idProveedor: idProveedor,
          idAgencia: idAgencia,
          idTipo_Turismo: idTipo_Turismo,
          turis_nombre: turis_nombre,
          turis_descripcion: turis_descripcion,
          turis_direccion: turis_direccion,
          turis_latitude: turis_latitude,
          turis_longitud: turis_longitud,
        }),
      };
      fetch("http://localhost:3800/api/addTuris_Lugares", requestInit)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            console.log(res.idProveedor);
          }
        });
    } else {
      alert("Faltan camspo");
    }
  };
  //PUT PARA CAMBIAR

  const handleidAgencia = (e) => {
    setidAgencia(e.target.value);
    console.log(idAgencia);
  };

  const handleidProveedor = (e) => {
    setidProveedor(e.target.value);
    console.log(idProveedor);
  };
  const handleTipoUsuario = (e) => {
    setidTipo_Turismo(e.target.value);
    console.log(idTipo_Turismo);
  };
  const handleNombre = (e) => {
    setturis_nombre(e.target.value);
    console.log(turis_nombre);
  };
  const handleDescripcion = (e) => {
    setturis_descripcion(e.target.value);
    console.log(turis_descripcion);
  };
  const handleDireccion = (e) => {
    setturis_direccion(e.target.value);
    console.log(turis_direccion);
  };
  const handleTelefono = (e) => {
    setturis_telefono(e.target.value);
    console.log(turis_telefono);
  };
  const handlelatitude = (e) => {
    setturis_latitude(e.target.value);
    console.log(turis_latitude);
  };
  const handlelongitud = (e) => {
    setturis_longitud(e.target.value);
    console.log(turis_longitud);
  };

  return (
    <div className="tipoTurismo">
      <h1>Crear Lugar Turistico</h1>
      <form className="newtipoTurismoForm" onSubmit={handleSubmit}>
        <div className="newtipoTurismoItem">
          <label>Ingrese un Proveedor</label>
        </div>
        <div className="Agencia">
          <TextField
            placeholder="Ingrese los Datos"
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
              handleidAgencia(e);
            }}
          />
        </div>
        <div className="Proveedor">
          <TextField
            placeholder="Ingrese los Datos"
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
              handleidProveedor(e);
            }}
          />
        </div>
        <div className="TipoUsuario">
          <TextField
            placeholder="Ingrese los Datos"
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
              handleTipoUsuario(e);
            }}
          />
        </div>
        <div className="Nombre">
          <TextField
            placeholder="Ingrese los Datos"
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
              handleNombre(e);
            }}
          />
        </div>
        <div className="Descripcion">
          <TextField
            placeholder="Ingrese los Datos"
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
              handleDescripcion(e);
            }}
          />
        </div>
        <div className="Direccion">
          <TextField
            placeholder="Ingrese los Datos"
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
              handleDireccion(e);
            }}
          />
        </div>
        <div className="Telefono">
          <TextField
            placeholder="Ingrese los Datos"
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
              handleTelefono(e);
            }}
          />
        </div>
        <div className="latitud">
          <TextField
            placeholder="Ingrese los Datos"
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
              handlelatitude(e);
            }}
          />
        </div>
        <div className="longitud">
          <TextField
            placeholder="Ingrese los Datos"
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
              handlelongitud(e);
            }}
          />
        </div>
        <button className="newtipoTurismoButton">Guardar</button>
      </form>
      <h1>Editar Item TurisLugares</h1>      
    </div>
  );
}