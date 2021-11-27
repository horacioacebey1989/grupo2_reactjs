import React ,{ useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import "./hotelList.css"
//import {hotelRows} from '../../dataTest'
import {Link} from 'react-router-dom'
import { DeleteOutlineOutlined } from "@material-ui/icons"


export default function HotelList() {

const [data, setData] = useState([]);

useEffect(() => {
    const getHotel = () =>{
        fetch('http://localhost:3900/api/getServHotel/1')
        .then(res => res.json())
        .then(res => {if(res) setData(res.hotel)})
    }
    getHotel()
}, [])

const handleDelete = (id) =>{
    setData(data.filter((item) => item.id !== id ))

    const requesInit ={
        method : 'PUT',
        headers : {
            'Content-Type':'application/json',
        },
    }

    fetch('http://localhost:3900/api/deleteServHotel/'+id,requesInit)
    .then(res => res.json())
    .then(res => {if(res){
        console.log(res.hotel);
        alert('El hotel fue eliminado!');
    }})

}

const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'nombre', headerName: 'Nombre', width: 250 },
    { field: 'descripcion', headerName: 'Descripcion', width: 500 },
    { field: 'direccion', headerName: 'Direccion', width: 500 },
    { field: 'telefono', headerName: 'Telefono', width: 200 },
    { field: 'nit', headerName: 'Email', width: 150 },
    { field: 'latitud', headerName: 'Latitud', width: 200 },
    { field: 'longitud', headerName: 'Longitud', width: 200 },
    { field: 'estado',headerName: 'Estado',width: 150,},
    { field: 'actions', headerName: 'Acciones', width: 150,
        renderCell: (params) =>{
            return(
                <>  
                    <Link to={"/hotel/"+params.row._id} state={{ hotelSend : params.row }}>
                        <button className='hotelListEdit'>Edit</button>
                    </Link>
                    <DeleteOutlineOutlined className='hotelListDelete' onClick={()=>handleDelete(params.row._id)}/>
                </>
            )
        }
    }
  ];
  
    return (
        <div className='hotelList'>
            <DataGrid
                getRowId={(row)=>row._id}
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}