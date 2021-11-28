import React ,{ useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import "./proveedorList.css"
import {proveedorRows} from '../../dataTest'
import {Link} from 'react-router-dom'
import { DeleteOutlineOutlined } from "@material-ui/icons"


export default function ProveedorList() {

const [data, setData] = useState([]);

useEffect(() => {
    const getTipo = () =>{
        fetch('http://localhost:3800/api/listadoProveedor/1')
        .then(res => res.json())
        .then(res => {if(res) setData(res.tipo)})
    }
    getTipo()
}, [])

const handleDelete = (id) =>{
    setData(data.filter((item) => item.id !== id ))

    const requesInit ={
        method : 'PUT',
        headers : {
            'Content-Type':'application/json',
        },
    }

    fetch('http://localhost:3800/api/deleteProveedor/'+id,requesInit)
    .then(res => res.json())
    .then(res => {if(res){
        console.log(res.proveedor);
        alert('El proveedor fue eliminado!');
    }})

}

const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'CI', headerName: 'CI', width: 100 },
    { field: 'telefono', headerName: 'Telefono', width: 120 },
    { field: 'email', headerName: 'Email', width: 2000 },
    { field: 'estado',headerName: 'Estado',width: 150,},
    { field: 'actions', headerName: 'Acciones', width: 150,
        renderCell: (params) =>{
            return(
                <>  
                    <Link to={"/user/"+params.row._id} state={{ userSend : params.row }}>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutlineOutlined className='userListDelete' onClick={()=>handleDelete(params.row._id)}/>
                </>
            )
        }
    }
  ];
  
    return (
        <div className='userList'>
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