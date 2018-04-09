import React, { Component } from 'react';
import axios from 'axios';


export default class Product extends Component {
  
    render(){
        console.log("Props inside product" +JSON.stringify(this.props))
        const {id,img, name,address,city,state,zip,mortgage,rent} = this.props.list;

    return(
    
        <div>
            <div key={id}>
            <img src = {img}alt="My Image" height="300" width="220"/> 
            <p> <b> Product name : {name}</b> </p>

            <p> <b>address : {address} </b> </p>
            <p> <b>City: {city} </b> </p>
            <p> <b> State : {state} </b> </p>
            <p> <b>zip: {zip} </b> </p>
            <p> <b>mortgage: {mortgage} </b> </p>
            <p> <b>rent: {rent} </b> </p>
  
            </div>
    </div>
)
}
}

