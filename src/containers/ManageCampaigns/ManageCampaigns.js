import React, { useState, useEffect } from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './ManageCampaigns.css';
import CampaignTable from '../../components/CampaignTable/CampaignTable';
import game1 from '../../assets/images/game1.png';
import game2 from '../../assets/images/game2.png';
import game3 from '../../assets/images/game3.png';
import game4 from '../../assets/images/game4.png';
import game5 from '../../assets/images/game5.png';
import game6 from '../../assets/images/game6.png';
import locale from '../lang';
import LangContext from '../../context/LangContext';
import Modal from '../../components/UI/Modal/Modal';

const ManageCampaigns = (props) => {
    let [upcomingData, setUpcomingData] = useState([]);
    let [liveData, setLiveData] = useState([]);
    let [pastData, setPastData] = useState([]);
    let [heading, setHeading] = useState(locale.en.heading);
    let [tabs, setTabs] = useState(locale.en.tabs);
    let [language, setLanguage] = useState("English");
    let [purchasing, setPurchasing] = useState(false);
    let [pricing, setPricing] = useState({
        image:game3,
        name:'Super Jewels Quest',
        price:['1 week to 1 month : $100','6 months : $300','1 year : $850']
    });
    let campaignsData = [
        {
            "id": 123456,
            "name": "Test Whatsapp",
            "region": "US",
            "date": 1586504315000,
            "price": ['1 week to 1 month : $100','6 months : $300','1 year : $850'],
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image": game1,
        },
        {
            "id": 213456,
            "name": "Super Jewels Quest",
            "region": "CA, FR",
            "date": 1590046715000,
            "price": ['1 week to 1 month : $200','6 months : $400','1 year : $700'],
            "csv": "Some CSV link for Super Jewels Quest",
            "report": "Some report link for Super Jewels Ques",
            "image": game2,
        },
        {
            "id": 312456,
            "name": "Mole Slayer",
            "region": "FR",
            "date": 1590392315000,
            "price": ['1 week to 1 month : $200','6 months : $500','1 year : $1000'],
            "csv": "Some CSV link for Mole Slayer",
            "report": "Some report link for Mole Slayer",
            "image": game3,
        },
        {
            "id": 412356,
            "name": "GAME 4",
            "region": "In",
            "date": 1590392315000,
            "price": ['1 week to 1 month : $300','6 months : $750','1 year : $1100'],
            "csv": "Some CSV link for Mole Slayer",
            "report": "Some report link for Mole Slayer",
            "image": game4,
        },
        {
            "id": 512346,
            "name": "GAME 5",
            "region": "UK",
            "date": 1586504315000,
            "price": ['1 week to 1 month : $220','6 months : $400','1 year : $1000'],
            "csv": "Some CSV link for Mole Slayer",
            "report": "Some report link for Mole Slayer",
            "image": game5,
        },
        {
            "id": 612345,
            "name": "GAME 6",
            "region": "IR",
            "date": 1590392315000,
            "price": ['1 week to 1 month : $200','6 months : $500','1 year : $700'],
            "csv": "Some CSV link for Mole Slayer",
            "report": "Some report link for Mole Slayer",
            "image": game6,
        }
    ];

    // These methods to set data to different states based on date comparison.

    const setUpcoming = () => {
        let tempArr = campaignsData.filter((ele) => {
            if (new Date(ele.date).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)) {
                // To calculate the time difference of two dates 
                let Difference_In_Time = new Date(ele.date).getTime() - new Date().getTime();
                // To calculate the no. of days between two dates 
                let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
                let date = new Date(ele.date).toDateString();
                ele['days'] = `${date}-${Difference_In_Days} days ahead`
                return true;
            } else {
                return false;
            }
        });
        setUpcomingData(tempArr);
    };

    const setLive = () => {
        let tempArr = campaignsData.filter((ele) => {
            if (new Date(ele.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
                let date = new Date(ele.date).toDateString();
                ele['days'] = `${date}-Today`
                return true;
            } else {
                return false;
            }
        });
        setLiveData(tempArr);
    }

    const setPast = () => {
        let tempArr = campaignsData.filter((ele) => {
            if (new Date(ele.date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
                // To calculate the time difference of two dates 
                let Difference_In_Time = new Date().getTime() - new Date(ele.date).getTime();
                // To calculate the no. of days between two dates 
                let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
                let date = new Date(ele.date).toDateString();
                ele['days'] = `${date}-${Difference_In_Days} days ago`
                return true;
            } else {
                return false;
            }
        });
        setPastData(tempArr);
    };

    useEffect(() => {
        setUpcoming();
        setLive();
        setPast();
    }, []);


    // handling click of schedule
    const handleScheduleClick = (date, id) => {
        for (let i = 0; i < campaignsData.length; i++) {
            if (campaignsData[i].id === id) {
                campaignsData[i].date = new Date(date).getTime();
            }
        }
        setUpcoming();
        setLive();
        setPast();
    };

    const handleLangChange = (event) => {
        setLanguage(event.target.value);
        if(event.target.value === 'Spanish'){
            setHeading(locale.sn.heading);
            setTabs(locale.sn.tabs);
        } else if(event.target.value === 'English') {
            setHeading(locale.en.heading);
            setTabs(locale.en.tabs);
        }
    }
    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }

    const handlePriceClick = (data) => {
        setPricing(data);
        setPurchasing(true);
    }

    // creating three routes for different tabs with coressponding data.
    return <div>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <div>
                    <img src={pricing.image} alt="Game"></img>
                    <span className={classes.modalName}>{pricing.name}</span>
                    <h1>Pricing</h1>
                    <ul className={classes.modalPricing}>
                        {pricing.price.map(
                            (item) => {
                                return <li key={item}>{item}</li>
                            }
                        )}
                    </ul>
                </div>
            </Modal>
            <label>
                Language:
                <select value={language} onChange={handleLangChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                </select>
            </label>
            <LangContext.Provider value={{header: heading,tabs: tabs}}>
                <LangContext.Consumer>
                    {(value) => (
                        <h1>{value.header}</h1>
                    )
                    }
                </LangContext.Consumer>
                <nav className={classes.nav}>
                    <NavigationItems />
                </nav>
            </LangContext.Provider>
            <Redirect to='/upcoming' />
            <Switch>
                <Route path="/upcoming" exact component={(props) => <CampaignTable tableData={upcomingData} onPurchase={handlePriceClick} onSchedule={handleScheduleClick} />} />
                <Route path="/live" exact component={(props) => <CampaignTable tableData={liveData} onPurchase={handlePriceClick} onSchedule={handleScheduleClick} />} />
                <Route path="/past" exact component={(props) => <CampaignTable tableData={pastData} onPurchase={handlePriceClick} onSchedule={handleScheduleClick} />} />
            </Switch>
        </div>
};

export default ManageCampaigns;
