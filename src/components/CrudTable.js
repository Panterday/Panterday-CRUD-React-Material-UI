import { Table, Typography, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import React from 'react';
import CrudTableRow from './CrudTableRow';
const CrudTable = ({data, setDataToEdit, deleteData, updateData})=>{
    return(
        <div id="id-table">
            <Typography variant="h5" color="textSecondary" style={{padding: '1em'}} align="center">Tabla de datos</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Ocupación</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(el => <CrudTableRow key= {el.id} data = {el} deleteData = {deleteData} setDataToEdit={setDataToEdit} updateData={updateData}></CrudTableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}

export default CrudTable; 