import React, { useState } from "react";
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
export default function ModalCrearTablaTurismo() {
  //Booleano para definir si esta o no abierto
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //Las variables/datos que tenemos dentro de nuestra tabla
  const [categoria, setcategoria] = React.useState("");
  const handleInputChange = (e) => {
    setcategoria(e.target.value);
  };
  //Funcion POST que mandara a crearse
  const handleSubmit = () => {
    if (categoria != "") {
      const requestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoria: categoria,
        }),
      };
      fetch("http://localhost:3800/api/addTipoTurismo", requestInit)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            console.log(res.categoria);
          }
        });
    } else {
      alert("Introduzca todos los campos");
    }
  };
  //Aqui empieza el HTML
  return (
    <div>
      <Grid align="right" style={{ marginCenter: 75 }}>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={() => {
            handleClickOpen();
          }}
        >  Nuevo Tipo de Turismo
        </Button>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
       
        maxWidth="xs"
      >
        <DialogTitle align="center" color="black">
          <Typography>Agregar Tipo de Turismo</Typography>
        </DialogTitle>
        <Divider></Divider>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container sx={{ p: 1, m: 1 }}>
              <TextField
                label="Categoria"
                variant="outlined"
                required             
                value={categoria}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </Grid>

            <button className="newUserButton" color="secondary" > Guardar </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
