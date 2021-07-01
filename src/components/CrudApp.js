
import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { Typography, Grid, Box } from '@material-ui/core';

const initialDB = [
    {
        id: 1, 
        name: 'David',
        job: 'programmer'
    },
    {
        id: 2,
        name: 'Jorge',
        job: 'Journalist'
    },
    {
        id: 3,
        name: 'Rebeca', 
        job: 'singer'
    }
]

const CrudApp = ()=>{

    const [db, setDb] = useState(initialDB);

    const [dataToEdit, setDataToEdit] = useState(null); 

    const createData = (data)=>{
        data.id = Date.now();
        setDb([...db, data])
    }

    const updateData = (data)=>{
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);  
    }

    const deleteData = (id)=>{
        let confirm = window.confirm('Seguro?')

        if(confirm){
            let newData = db.filter(el => el.id !== id);
            setDb(newData); 
        }
    }

    return(
        <>
            <Typography variant="h4" color="textSecondary" align="center">CRUD App</Typography>
            <Box>
                <Grid container /* spacing={1} bgcolor="primary.main" justify="space-evenly" */>
                    <Grid item xs={12} md={6}>
                        <Box align="center">
                            <CrudForm createData = {createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit = {setDataToEdit}></CrudForm>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box>
                            <CrudTable data = {db} deleteData = {deleteData} setDataToEdit={setDataToEdit} updateData={updateData}></CrudTable>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CrudApp; 