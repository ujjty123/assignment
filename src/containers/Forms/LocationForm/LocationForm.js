import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classes from './LocationForm.css';
import Button from '../../../components/UI/Button/Button';

export default function LocationForm(props) {
    let initialState = {
        locationName:'',
        address1:'',
        address2:'',
        suiteno:'',
        city:'',
        state:'',
        zip:'',
        phone:'',
        timezone:''
    };
    const [input, setInput] = useState({...initialState});
    
    const handleInputChange = (e) => {
        console.log('handleInputChange');
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };
    const onCancled = () => {
        setInput({...initialState});
        props.cancled();
    };
    const onSave = () => {
        console.log('input',input);
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Add Locations
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="locationName"
                        name="locationName"
                        label="Location Name"
                        InputLabelProps={{
                            shrink: true,
                            error:true
                        }}
                        InputProps={{
                            error:true,
                            value: input.locationName,
                            onChange: handleInputChange
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address Line 1"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                            error:true
                        }}
                        InputProps={{
                            error:true,
                            value: input.address1,
                            onChange: handleInputChange
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="suiteno"
                        name="suiteno"
                        label="Suite No."
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            value: input.suiteno,
                            onChange: handleInputChange
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address Line 2"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            value: input.address2,
                            onChange: handleInputChange
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            value: input.city,
                            onChange: handleInputChange
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField id="state" name="state" label="State" fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            value: input.state,
                            onChange: handleInputChange
                        }} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="zip"
                        name="zip"
                        label="Zip  code"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            value: input.zip,
                            onChange: handleInputChange
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="phone"
                        name="phone"
                        label="contact"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                            error:true
                        }}
                        InputProps={{
                            error:true,
                            value: input.phone,
                            onChange: handleInputChange
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="timezone"
                        name="timezone"
                        label="Time Zone"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            value: input.timezone,
                            onChange: handleInputChange
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        id="facilitytime"
                        name="facilitytime"
                        label="FacilityTimes"
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="appointmentpool"
                        name="appointmentpool"
                        label="AppointmentPool"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                </Grid>
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