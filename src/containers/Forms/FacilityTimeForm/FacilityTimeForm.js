import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classes from './FacilityTimeForm.css';
import Button from '../../../components/UI/Button/Button';

export default function FacilityTimeForm(props) {

    //on cancel re-initialized the form and calling props function to close form modal.
    const onCancled = () => {
        props.cancled();
    };

    // if form submit is valid pass input object to be saved.
    const onSave = () => {
        // props.save();
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Facility Times
            </Typography>
            <Grid container spacing={2}>
             
            </Grid>
            <div className={classes.Buttons}>
                <Button
                    btnType="Cancel"
                    clicked={onCancled}
                >cancel</Button>
                <Button
                    btnType="Save"
                    clicked={onSave}
                >save</Button>
            </div>
        </React.Fragment>
    );
}