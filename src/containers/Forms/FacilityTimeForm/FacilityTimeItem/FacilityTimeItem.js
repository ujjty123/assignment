import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './FacilityTimeItem.css';
import Button from '../../../../components/UI/Button/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  time: {
    '& .MuiInputBase-input': {
      height:'20px',
      width: '45px',
      padding:'6px'
    },
  },
}));



const FacilityTimeItem = (props) => {
    const classesMUI = useStyles();
    let initialState = {...props.time}
    const [checked, setChecked] = React.useState(initialState.checked);
    const [input, setInput] = React.useState({...initialState.input});

    const handleInputChange = (e) => {
        let name = e.currentTarget.name;
        setInput({
            ...input,
            [name]: e.currentTarget.value
        });
    };

    return(
        <div className={classes.Outer}>
                <div style={{
                    width:'80px'
                }}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={checked}
                            // onChange={handleCheckChange}
                            name="checked"
                            color="primary"
                        />
                        }
                        label={props.time.day}
                    />
                </div>
                <TextField
                    className = {classesMUI.time}
                    id="fromtime"
                    name="fromTime"
                    label="From"
                    InputLabelProps={{
                        value: input.fromTime,
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Button
                    btnType="AM"
                >AM</Button>
                <Button
                    btnType="PM"
                >PM</Button>
                <TextField
                    className = {classesMUI.time}
                    id="totime"
                    label="To"
                    name="toTime"
                    InputLabelProps={{
                        value: input.toTime,
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Button
                    btnType="AM"
                >AM</Button>
                <Button
                    btnType="PM"
                >PM</Button>
                <Button
                    btnType="Apply"
                >Apply to All checked</Button>
            </div>
    );
};

export default FacilityTimeItem;