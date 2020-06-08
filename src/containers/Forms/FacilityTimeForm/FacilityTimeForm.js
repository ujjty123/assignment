import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classes from './FacilityTimeForm.css';
import Button from '../../../components/UI/Button/Button';
import FacilityTimeItem from './FacilityTimeItem/FacilityTimeItem';


export default function FacilityTimeForm(props) {
    //on cancel re-initialized the form and calling props function to close form modal.
    const onCancled = () => {
        props.cancled();
    };

    // if form submit is valid pass input object to be saved.
    const onSave = () => {
        // props.save();
    };

    const facilityTimeArr = [
        {
            day:'Sun',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: 'AM',
            toMidday: 'PM'
        },
        {
            day:'Mon',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: 'AM',
            toMidday: 'PM'
        },
        {
            day:'Tue',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: 'AM',
            toMidday: 'PM'
        },
        {
            day:'Wed',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: 'AM',
            toMidday: 'PM'
        },
        {
            day:'Thu',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: 'AM',
            toMidday: 'PM'
        },
        {
            day:'Fri',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: 'AM',
            toMidday: 'PM'
        },
        {
            day:'Sat',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: 'AM',
            toMidday: 'PM'
        }
    ]

    const [facilityTime, setFacilityTime] = useState(facilityTimeArr);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Facility Times
            </Typography>
            {facilityTime.map((item)=>{
                return <FacilityTimeItem key={item.day} time={{...item}}/>
            })}
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