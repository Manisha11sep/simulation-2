import React, {Component}from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
   constructor(){
       super();
       this.state = {
           houses: []
      }
   }
componentDidMount() {
   axios.get('/api/house').then(r => {
       this.setState({
           houses: r.data
       })
       console.log(r.data);
       console.log(this.state.houses)
   })
}
   render() {
       let houses = this.state.houses.map((house,i) => {
             return(
              <div>
           <p>Name: {house.name}</p>
           <p>Address: {house.address}</p>
           <p>City: {house.city}</p>
           <p>State: {house.state}</p>
           <p>Zip: {house.zip}</p>
           </div>
             );
          
       
       })
       return(
           <div>
               <Link to='/wizard'><button>Add New Listing</button></Link>
               <br/>

               <br/>
               {houses}
           </div>

       )
   }
}