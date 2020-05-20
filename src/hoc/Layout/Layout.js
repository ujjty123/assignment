import React from 'react';
import classes from './Layout.css';
import Header from '../../components/UI/Header/Header';

const layout = (props) => {
        return (
            <React.Fragment>
                <Header  />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </React.Fragment>
        )
}

export default layout;