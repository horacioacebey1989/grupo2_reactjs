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

export default function ModalEliminarTablaTurismo(tipo) {
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

  const handleDelete = () => {
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
      fetch("http://localhost:3800/api/deleteTipoturismo/" + aux2, requesInit)
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
          <Typography>Eliminar Tipo de Turismo</Typography>
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
