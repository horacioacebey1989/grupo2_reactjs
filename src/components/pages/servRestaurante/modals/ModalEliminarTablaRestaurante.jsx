import React, { useState } from "react";
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function ModalEliminarTablaRestaurante(tipo) {
  //BOOLEANO PARA ABRIR/CERRAR EL MODAL
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //ELIMINAMOS LA TABLA AUNQUE EN REALIAD LO QUE HAREMOS ES CAMBIAR EL ESTADO DE "TRUE" A "FALSE" YA QUE SOLO NOS MUESTRA LOS DATOS QUE SON TRUE EN LA TABLA
  const [aux, setAux] = React.useState(tipo);
  const aux2 = Object.values(aux);
  console.log(aux);
  // AUX ES EL PRIMER RESULTADO, PERO NECESITAMOS TRANSFORMARLO A OBJECTO, DE AHI QUE TENEMOS AUX2 Y ESE ES EL ID QUE MANDAMOS
  const handleDelete = () => {
    if (aux2 != "") {
      const requesInit = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        }
      };
      fetch("http://localhost:3800/api/deleteserv_restaurante/" + aux2, requesInit)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            alert("Item Eliminado");
          }
        });
    } else {
      alert("No se pudo eliminar!");
    }
  };
//ESTE HTML ES SENCILLO, SOL OES UN FORM QUE TIENE SI "SI" ELIMINAREMOS O "NO"
  return (
    <div>
      <Grid align="right" style={{ marginCenter: 75 }}>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Eliminar
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
          <Typography>Eliminar Restaurante</Typography>
        </DialogTitle>
        <Divider></Divider>
        <DialogContent>
          <form onSubmit={handleDelete}>
            <Grid container sx={{ p: 1, m: 1 }}>
              <Typography>¿Tas bien que queres eliminar loco?</Typography>
            </Grid>
            <button className="NewUserButton">Si</button>
          </form>
          <button className="NewUserButton" onClick={handleClose}>
            No
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
