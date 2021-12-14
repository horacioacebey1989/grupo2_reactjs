import React, { useState } from "react";
import {  Button,  Dialog,  DialogContent,  DialogTitle,  Divider,  Grid,  Slide,  TextField,  Typography,} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function ModalEditTablaServicio(tipo) {
  //BOOLEANO PARA ABRIR/CERRAR EL MODAL
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //EDITAR TIPO DE TURISMO
  const [categoria, setcategoria] = React.useState("");
  const [aux, setAux] = React.useState(tipo);
  const aux2 = Object.values(aux);
  console.log(aux);
  const handleInputChange = (e) => {
    setcategoria(e.target.value);
  };

  const handleEdit = () => {
    if (aux2 != "") {
      const requesInit = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoria: categoria,
        }),
      };
      fetch("http://localhost:3800/api/updateTipoServicio/" + aux2, requesInit)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            alert("Actualizacion completado");
          }
        });
    } else {
      alert("Introduzca los valores!");
    }
  };

  return (
    <div>
      <Grid align="right" style={{ marginCenter: 80 }}>
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Editar
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
        <DialogTitle align="center">
          <Typography>Editar Tipo de Servicio</Typography>
        </DialogTitle>
        <Divider></Divider>
        <DialogContent>
          <form onSubmit={handleEdit}>
            <Grid container sx={{ p: 1, m: 1 }}>
            <TextField
                label="ID"
                variant="outlined"
               disabled
                value={aux2}
              />
              <TextField
                label="servicio"
                variant="outlined"
                required
                value={categoria}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </Grid>

            <button className="newUserButton">Guardar</button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
