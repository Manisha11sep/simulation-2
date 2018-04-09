import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WizardCSS from './Wizard.css';
import axios from 'axios';
import { connect } from 'react-redux'; 
import Reducer, { updateName, updateCity, updateState, updateAddress } from '../../ducks/reducer';

class Wizard extends Component {
  constructor(){
    super();
    this.state ={
      name :'',
      img:'',
    address:'',
  city: '',
state:'',
zip:'',
mortgage: '',
rent:'',
houses:[]

    }
  }


  

  createProduct(text)
  {
    axios.post('/api/house', {text}).then( results => {
      console.log({text});
      this.setState({ houses: results.data });
  
    });
  }
    render() {
      const {text } =this.state;
      const { updateImg, updateName } = this.props;
      return (
        <div>
       <p> Inside Wizard</p>
  <h2>Property Name</h2>
       <input className='info-box' placeholder ="Enter Name"
value = {text}
onChange= {(e)=>updateName(e.target.value)}/>
<h2>Address</h2>
<input className='info-box' placeholder ="Enter Address"
// value = {text}
onChange={(e) =>updateAddress(e.target.value)}
/>
<h2>City</h2>
<input className='info-box' placeholder ="Enter City"
// value = {text}
onChange={(e) =>updateCity(e.target.value)}
/>
<h2>State</h2>
<input className='info-box' placeholder ="Enter state"
// value = {text}
onChange={(e) =>updateState(e.target.value)}
/>

<button onClick ={this.createProduct}> Add to Inventory </button>
       <Link to= "/" ><button> Cancel </button> </Link>
        </div>
      );
    }
  }
  


  function mapStateToProps( state ) {
    return{ 
      name :state.name,
      address:state.address,
    city: state.city,
  state:state.state

    };
  }
  export default connect (mapStateToProps, { updateName, updateCity, updateState, updateAddress }) (Wizard);

