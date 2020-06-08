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
    let initialState = {...props.time};
    let initialErrorState = {
        fromTime: false,
        toTime:false
    };
    const [checked, setChecked] = React.useState(initialState.checked);
    const [input, setInput] = React.useState({...initialState.input});
    const [error, setError] = React.useState({...initialErrorState});

    const handleInputChange = (e) => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        if(value.length > 5){
            return;
        }

        let regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm;
        let match = value.search(regex);
        
        if(match === -1){
            setError(prevState => ({ ...prevState, [name]: true }));
        } else if(match === 0){
            setError(prevState => ({ ...prevState, [name]: false }));
            let hour = ((parseInt(value.split(':')[0]) % 12) || 12).toString();
            if(hour.length == 1) hour = `0${hour}`;
            value = hour +':'+ value.split(':')[1];
        } 
        setInput({
            ...input,
            [name]: value
        });
    };


    React.useEffect(() => {
        setInput((prevState) => {
          const data = {...props.time.input};
          return data;
        });
      }, [props.time.input]);


    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
        props.onChecked(props.idx,event.target.checked);
    };
    const handleApplyToAll = () => {
        props.applyToAll(input);
    }

    return(
        <div className={classes.Outer}>
                <div style={{
                    width:'80px'
                }}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={checked}
                            onChange={handleCheckChange}
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
                        shrink: true,
                        error:error.fromTime
                    }}
                    InputProps={{
                        error:error.fromTime,
                        value: input.fromTime,
                        onChange: handleInputChange,
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
                        shrink: true,
                        error:error.toTime
                    }}
                    InputProps={{
                        value: input.toTime,
                        onChange: handleInputChange,
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
                    clicked={handleApplyToAll}
                >Apply to All checked</Button>
            </div>
    );
};

export default FacilityTimeItem;