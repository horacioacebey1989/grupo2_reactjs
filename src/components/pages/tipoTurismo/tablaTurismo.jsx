import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./tablaTurismo.css";
import { Link } from "react-router-dom";
import ModalCrearTablaTurismo from "../../pages/tipoTurismo/modals/ModalCrearTablaTurismo";
import ModalEditTablaTurismo from "../../pages/tipoTurismo/modals/ModalEditTablaTurismo";
import ModalEliminarTablaTurismo from "../../pages/tipoTurismo/modals/ModalEliminarTablaTurismo";

export default function TablaTurismo() {
//Data es donde alojaremos todos los resultados 
  const [data, setData] = useState([]);
//este UseEffect es para recibir todos los datos de la tabla en general, sin ID especifico
  useEffect(() => {
    const gettipoTurismo = () => {
      fetch("http://localhost:3800/api/getTipoTurismoList")
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setData(res.tipoTurismo);
          }
        });
    };
    gettipoTurismo();
 //   console.log(data);
  }, []);
//aqui definimos las columnas que vamos a visualizar en la tabla
  const columns = [
    { field: "categoria", headerName: "Categoria", width: 250,headerStyle: { textjustify: "center" }  },
    { field: "modal", headerName: "Acciones",  width: 250, headerStyle: { textjustify: "left" },
//Aqui en params lo que mandaremos sera los parametros qye se usaran para los modals
      renderCell: (params) => {
        return (
//Aqui se declara los 2 modals que se usaran, el primero es para editar la fila, ele segundo para eliminarla
          <>
            <ModalEditTablaTurismo tipo={params.row._id} />
            <ModalEliminarTablaTurismo tipo={params.row._id} />
          </>
        );
      },
    },
  ];
//Aqui empieza el HTML
  return (
      <div className="Content" >
           
    <div className="tablaTurismoList">
{/*Aqui esta el Modal que abrira el formulario para crear el item */}
<ModalCrearTablaTurismo />
     
{/*Aqui se genera las columnas automaticamente */}
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      /></div>
    </div>
  );
}
