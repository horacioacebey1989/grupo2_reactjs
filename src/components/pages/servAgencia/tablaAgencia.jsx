import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./tablaAgencia.css";
import { Link } from "react-router-dom";
import ModalCrearTablaTurismo from "../tipoTurismo/modals/ModalCrearTablaTurismo";
import ModalEditTablaTurismo from "../tipoTurismo/modals/ModalEditTablaTurismo";
import ModalEliminarTablaTurismo from "../tipoTurismo/modals/ModalEliminarTablaTurismo";

export default function TablaAgencia() {
//Data es donde alojaremos todos los resultados 
  const [data, setData] = useState([]);
//este UseEffect es para recibir todos los datos de la tabla en general, sin ID especifico
  useEffect(() => {
    const getAgencias = () => {
      fetch("http://localhost:3800/api/get_servAgenciaList")
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setData(res.servAgencia);
          }
        });
    };
    getAgencias();
 //   console.log(data);
  }, []);
//aqui definimos las columnas que vamos a visualizar en la tabla
const columns = [
  //{ field: "idProveedor", headerName: "Proveedor", width: 250,headerStyle: { textjustify: "center" }  },
 // { field: "idServicio", headerName: "Servicio", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "ag_nombre", headerName: "Nombre", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "ag_descripcion", headerName: "Descripción", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "ag_direccion", headerName: "Dirección", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "ag_telefono", headerName: "Telefono", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "ag_nit", headerName: "NIT", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "modal", headerName: "Acciones",  width: 250, headerStyle: { textjustify: "left" },
//Aqui en params lo que mandaremos sera los parametros qye se usaran para los modals

  },
];
//Aqui empieza el HTML
return (
    <div className="Content" >
         
  <div className="tablaAgenciaList">
{/*Aqui esta el Modal que abrira el formulario para crear el item 
<ModalCrearRestaurante />*/}
   
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