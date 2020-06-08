import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import classes from './FacilityTimeForm.css';
import Button from '../../../components/UI/Button/Button';
import FacilityTimeItem from './FacilityTimeItem/FacilityTimeItem';


export default function FacilityTimeForm(props) {
    const facilityTimeArr = [
        {
            day:'Sun',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: {
                AM:'AMActive',
                PM:'PMInactive'
            },
            toMidday: {
                AM:'AMInactive',
                PM:'PMActive'
            }
        },
        {
            day:'Mon',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: {
                AM:'AMActive',
                PM:'PMInactive'
            },
            toMidday: {
                AM:'AMInactive',
                PM:'PMActive'
            }
        },
        {
            day:'Tue',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: {
                AM:'AMActive',
                PM:'PMInactive'
            },
            toMidday: {
                AM:'AMInactive',
                PM:'PMActive'
            }
        },
        {
            day:'Wed',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: {
                AM:'AMActive',
                PM:'PMInactive'
            },
            toMidday: {
                AM:'AMInactive',
                PM:'PMActive'
            }
        },
        {
            day:'Thu',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: {
                AM:'AMActive',
                PM:'PMInactive'
            },
            toMidday: {
                AM:'AMInactive',
                PM:'PMActive'
            }
        },
        {
            day:'Fri',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: {
                AM:'AMActive',
                PM:'PMInactive'
            },
            toMidday: {
                AM:'AMInactive',
                PM:'PMActive'
            }
        },
        {
            day:'Sat',
            checked: false,
            input:{
                fromTime: '10:30',
                toTime: '06:30',
            },
            fromMidday: {
                AM:'AMActive',
                PM:'PMInactive'
            },
            toMidday: {
                AM:'AMInactive',
                PM:'PMActive'
            }
        }
    ]

    const [facilityTime, setFacilityTime] = useState([...facilityTimeArr]);

    //on cancel re-initialized the form and calling props function to close form modal.
    const onCancled = () => {
        setFacilityTime([...facilityTimeArr]);
        props.cancled();
    };

    // if form submit is valid pass input object to be saved.
    // const onSave = () => {
    //     props.cancled();
    // };

    const handeChecked = (index, value) => {
        setFacilityTime(prevState => {  
            prevState[index].checked = value;
            return prevState;
        });
    };

    const onApplyToAll = (data, midObj) => {
        setFacilityTime(prevState => {  
            let stateTemp = prevState.map((item)=>{
                if(item.checked === true){
                    item.input = {...item.input,...data};
                    item.fromMidday.AM = midObj.fromMiddayAM;
                    item.fromMidday.PM = midObj.fromMiddayPM;
                    item.toMidday.AM = midObj.toMiddayAM;
                    item.toMidday.PM = midObj.toMiddayPM;
                }
                return item;
            });
            return stateTemp;
        });
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Facility Times
            </Typography>
            {facilityTime.map((item,index)=>{
                return <FacilityTimeItem 
                    key={item.day} 
                    idx={index} 
                    time={{...item}} 
                    onChecked={handeChecked}
                    applyToAll={onApplyToAll}/>
            })}
            <div className={classes.Buttons}>
                <Button
                    btnType="Cancel"
                    clicked={onCancled}
                >cancel</Button>
                <Button
                    btnType="Save"
                    clicked={onCancled}
                >save</Button>
            </div>
        </React.Fragment>
    );
}