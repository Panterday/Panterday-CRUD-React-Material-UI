import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
const CrudTableRow = ({data, setDataToEdit, deleteData, updateData})=>{
    return(
       

        <TableRow>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.job}</TableCell>
            <TableCell>
                <Button variant="contained" color="primary" startIcon={<EditIcon/>} onClick={()=>setDataToEdit(data)}>Editar</Button>
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>} onClick={()=>deleteData(data.id)}>Eliminar</Button>
            </TableCell>
        </TableRow>
    )
}

export default CrudTableRow; 