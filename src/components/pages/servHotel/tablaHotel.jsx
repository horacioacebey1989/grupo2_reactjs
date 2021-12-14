import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./tablaHotel.css";
import { Link } from "react-router-dom";
import ModalCrearHotel from "../../pages/servHotel/modals/ModalCrearTablaHotel";
import ModalEditTablaHotel from "../../pages/servHotel/modals/ModalEditTablaHotel";
import ModalEliminarTablaHotel from "../../pages/servHotel/modals/ModalEliminarTablaHotel";

export default function TablaHotel() {
//Data es donde alojaremos todos los resultados 
  const [data, setData] = useState([]);
//este UseEffect es para recibir todos los datos de la tabla en general, sin ID especifico
  useEffect(() => {
    const getHoteles = () => {
      fetch("http://localhost:3800/api/get_servHotelList")
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setData(res.servHotel);
          }
        });
    };
    getHoteles();
 //   console.log(data);
  }, []);
//aqui definimos las columnas que vamos a visualizar en la tabla
const columns = [
  //{ field: "idProveedor", headerName: "Proveedor", width: 250,headerStyle: { textjustify: "center" }  },
 // { field: "idServicio", headerName: "Servicio", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "hotel_nombre", headerName: "Nombre", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "hotel_descripcion", headerName: "Descripción", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "hotel_direccion", headerName: "Dirección", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "hotel_telefono", headerName: "Telefono", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "hotel_nit", headerName: "NIT", width: 250,headerStyle: { textjustify: "center" }  },
  { field: "modal", headerName: "Acciones",  width: 250, headerStyle: { textjustify: "left" },
//Aqui en params lo que mandaremos sera los parametros qye se usaran para los modals
renderCell: (params) => {
  return (
//Aqui se declara los 2 modals que se usaran, el primero es para editar la fila, ele segundo para eliminarla
    <>
      <ModalEditTablaHotel tipo={params.row._id} />
      <ModalEliminarTablaHotel  tipo={params.row._id} />
    </>
  );
},
},
];
//Aqui empieza el HTML
return (
<div className="Content" >
     
<div className="tablaRestauranteList">
{/*Aqui esta el Modal que abrira el formulario para crear el item */}
<ModalCrearHotel />

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
