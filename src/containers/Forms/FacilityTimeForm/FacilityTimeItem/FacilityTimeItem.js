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
    return(
        <div className={classes.Outer}>
                <FormControlLabel
                    control={
                    <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Sun"
                />
                <TextField
                    className = {classesMUI.time}
                    id="fromtime"
                    label="From"
                    InputLabelProps={{
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
                    InputLabelProps={{
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