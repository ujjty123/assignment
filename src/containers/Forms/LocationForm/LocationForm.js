import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classes from './LocationForm.css';
import Button from '../../../components/UI/Button/Button';

export default function LocationForm(props) {
    // initial input values
    let initialInputState = {
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

    // initial validation configuration
    let initialErrorState = {
        locationName: false,
        address1:false,
        phone:false
    }
    
    // input and validation error states
    const [input, setInput] = useState({...initialInputState});
    const [error, setError] = useState({...initialErrorState});

    //handling the input values change, maintaining an input object containg the form field values.
    const handleInputChange = (e) => {
        let name = e.currentTarget.name;
        // unset the error when user enter some value
        if(e.currentTarget.value.length > 0){
            setError(prevState => ({ ...prevState, [name]: false }));
        }
        if(name === 'phone'){
            let regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/gm;
            let match = e.currentTarget.value.search(regex);
            if(match === -1){
                setError(prevState => ({ ...prevState, [name]: true }));
            }
        }
        setInput({
            ...input,
            [name]: e.currentTarget.value
        });
    };

    //on cancel re-initialized the form and calling props function to close form modal.
    const onCancled = () => {
        setInput(prevState => ({ ...prevState, ...initialInputState}));
        props.cancled();
    };

    // Required fields validation logic
    const validateForm = () => {
        let doSave = true;
        for (const key in error) {
            if(input[key] === ''){
                (function(key){
                    setError(prevState => ({ ...prevState, [key]: true }));
                })(key);
                doSave = false;
            }
            if(key === 'phone' && input[key].length > 0){
                let regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/gm;
                let match = input[key].search(regex);
                if(match === -1){
                    setError(prevState => ({ ...prevState, [key]: true }));
                    doSave = false;
                }
            }
        }
        return doSave;
    }

    // if form submit is valid pass input object to be saved.
    const onSave = () => {
        let isValid = validateForm();
        if(isValid === true){
            props.save(input);
            setInput(prevState => ({ ...prevState, ...initialInputState}));
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Add Locations
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="locationName"
                        name="locationName"
                        label="Location Name"
                        InputLabelProps={{
                            shrink: true,
                            error:error.locationName
                        }}
                        InputProps={{
                            error:error.locationName,
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
                            error:error.address1
                        }}
                        InputProps={{
                            error:error.address1,
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
                        required
                        id="phone"
                        name="phone"
                        label="contact"
                        helperText="US Format"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                            error:error.phone
                        }}
                        InputProps={{
                            error:error.phone,
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
                        helperText="Click this to open Facility Timing Form"
                        InputProps={{
                            onFocus: props.facilityFocus,
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