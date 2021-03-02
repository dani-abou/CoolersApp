import App from 'next/app';
import './app.css';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import db from './firebase.js';
import 'firebase/firestore'
import "firebase/auth";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import { updateInCoolerCount, updateOutCoolerCount } from './CoolerCount.js'
import { graphqlRequest, coolersFromOrder } from './store.js'


//The name of the collection of the cooler database
//Kept globally so it's easily changeable
const databaseName = 'cooler-tracking';

//Update cooler with given id to out with the given order number
async function updateOutboundCooler(order, cooler, employeeNo) {
  let res = db.collection(databaseName).doc(cooler)
    .set({status: order, employee: employeeNo});
  coolersFromOrder(order);
  updateOutCoolerCount(order, cooler);
}

//Update the given cooler id to inventory
async function updateInboundCooler(coolers) {
  const batch = db.batch();
  coolers.map(
    (id) => {
    let currentRef = db.collection(databaseName).doc(id);
    batch.set(currentRef, {status: 'inventory', employee: 'inventory'});
  }
  )
  let res = await batch.commit();
  updateInCoolerCount(order);
}

//Instantiates the page to assosciate the order to cooler
 function OutboundPage(props) {
   //States to represent the current value of the order and the cooler
  const [employeeNum, setEmployee] = useState("NA")
  const [orderNum, setOrder] = useState("NA");
  const [coolerNum, setCooler] = useState("NA");
  //States to represent the value held within the input fields
  const [inEValue, setInEValue] = useState('')
  const [inOValue, setInOValue] = useState('')
  const [inCValue, setInCValue] = useState('')
  //State to represent the error messages if needed (if none, then keep empty)
  const [errorMsg, setError] = useState('')
  //Refs to each of the fields so to trade off focuses
  const eNumberField = React.createRef();
  const oNumberField = React.createRef();
  const cNumberField = React.createRef();

  //Handles the changes in the order input field
  //Only stores new order if it is of correct length
  const handleOChange = (e) => {
    let input = e.target.value;
    if (input.length === props.orderLength) {
       setOrder(input);
       setInOValue('');
       cNumberField.current.focus()
    } else {
      setInOValue(input);
    }
  }

  //Handles the changges to the cooler input field
  //Only stores new cooler if it is of correct length
  const handleCChange = (e) => {
    let input = e.target.value;
    if (input.length == props.coolerLength) {
      setCooler(input);
      setInCValue('');
      eNumberField.current.focus();
    } else {
      setInCValue(input);

    }
  }

  //Handles the changges to the cooler input field
  //Only stores new cooler if it is of correct length
  const handleEChange = (e) => {
    let input = e.target.value;
    if (input.length == props.employeeLength) {
      setEmployee(input);
      setInEValue('');
      oNumberField.current.focus();
    } else {
      setInEValue(input);
    }
  }

  //Handles the submit button's functionality
  //Updates the outgoing cooler then resets the states of the cooler and order
  //Prints error if either are NA
  const handleSubmit = () => {
    if (orderNum !== 'NA' && coolerNum !== 'NA' && employeeNum !== 'NA') {
      updateOutboundCooler(orderNum, coolerNum, employeeNum);
      setOrder('NA');
      setCooler('NA');
      setEmployee('NA');
      setError('');
      oNumberField.current.focus();
    } else {
      setError('Need to have an employee number, order number, and cooler number')
    }
  }

  //Prints the outgoing page
  return(
    <div className="inOutPage" >
      <h3 className="pageTitle">Cooler Scanning</h3>
      <form className="fieldDiv">
        <label className="scanLabel">
          Employee Number:
          <input
            value={inEValue}
            onChange={handleEChange}
            className="inputBox"
            ref = {eNumberField}
            />
        </label>
        <label className="scanLabel">
          Order Number:
          <input
            value={inOValue}
            onChange={handleOChange}
            className="inputBox"
            ref = {oNumberField}
            />
        </label>
        <label className="scanLabel">
          Cooler Number:
          <input
            value={inCValue}
            onChange={handleCChange}
            className="inputBox"
            ref = {cNumberField}
            />
        </label>
      </form>
      <div className="numbersDiv">
        <h3 style={{color: "red"}}>{errorMsg}</h3>
        <h3>Employee Order Number: {employeeNum}</h3>
        <h3>Current Order Number: {orderNum}</h3>
        <h3>Current Cooler Number: {coolerNum}</h3>
        <button onClick={handleSubmit}>
          Submit</button>
      </div>
    </div>
  )
}


//Instantiates the page to mark the cooler as picked up
function InboundPage(props) {
  //State that represents the value in the input field
  const [inCValue, setInCValue] = useState('');
  //Represents the accumulating list of coolers to be updated
  const [coolers, setCoolers] = useState([]);

  //Handles when cooler field has been changed
  //-- only has an effect if the cooler id's length is the desired one
  const handleChange = (e) => {
    let input = e.target.value;
    if (input.length == props.coolerLength) {
      setInCValue('');
      if (!coolers.includes(input)){
        setCoolers([...coolers, input]);
      }
    } else {
      setInCValue(input);
    }
  }

  const handleInSubmit = () => {
    updateInboundCooler(coolers);
    setCoolers([]);
  }

  const preventEnterSubmit = (e) => {
    alert(here)
    e.preventDefault()
  }


  //Prints this page
  return(
    <div>
      <h3 className="pageTitle">Cooler Scanning</h3>
      <form className="inOutPage" onSubmit={e => {e.preventDefault();}}>
        <label className="scanLabel">
          Cooler Number:
          <input value={inCValue} onChange={handleChange} className="inputBox"/>
        </label>
      </form>
      <div className="subSectionIn">
        <h3 className = "numOfCools">
          There are {coolers.length} coolers in this batch</h3>
        <button type ="button" className = "inSubmitButton"
            onClick={handleInSubmit}>Submit</button>
      </div>
    </div>
  )
}


class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forcedRedirect: true}
    return (
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>Assigning Cooler</Tab>
            <Tab>Inbound Cooler</Tab>
          </TabList>
          <TabPanel>
            <OutboundPage employeeLength={3} orderLength={13} coolerLength={4} />
          </TabPanel>
          <TabPanel>
              <InboundPage coolerLength={4} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default MyApp;
