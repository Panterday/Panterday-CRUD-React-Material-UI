import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography'
import { ButtonGroup, TextField, Button, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'

const initialForm = {
    name: '',
    job: '',
    id: null
}

const CrudForm = (props)=>{

    const [form, setForm] = useState(initialForm);

    useEffect(()=>{
        if(props.dataToEdit){
            setForm(props.dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[props.dataToEdit])

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(form.id === null){
            props.createData(form);
        }else{
            props.updateData(form); 
        }

        handleReset(); 
    }

    const handleReset = (e) =>{
        setForm(initialForm);
        props.setDataToEdit(null); 
    }

    return(
        <Grid container>
            <Typography style={{padding: '1em', margin: '0 auto'}} variant="h5" color="textSecondary">{props.dataToEdit == null ? 'Agregar': 'Editar'}</Typography>
            <Grid container component="form" onSubmit={handleSubmit} direction="column">
                <TextField style={{width: '90%', margin: '0 auto'}} align= "center" label="Nombre" name="name" onChange={handleChange} value={form.name} required={true}></TextField>
                <TextField style={{width: '90%', margin: '0 auto'}} label="Ocupación" name="job" onChange={handleChange} value={form.job} required={true}></TextField>

                <ButtonGroup style={{margin: '0 auto', padding: '1em'}}>
                    <Button type="submit" color="primary" variant="contained" startIcon={<SaveIcon />}>Guardar</Button>
                    <Button type="reset" color="secondary" variant="contained" startIcon={<DeleteIcon />} onClick={handleReset}>Limpiar</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}

export default CrudForm; 