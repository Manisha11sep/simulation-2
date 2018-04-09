import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import House from './components/House/House';

import Header from './components/Header/Header';
import Wizard from './components/Wizard/Wizard';
import routes from './router';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state ={
      houses: []
        }
  }
  // componentDidMount(){
  //   axios.get('/api/house').then(res =>{
  //     console.log("Value from express "+ JSON.stringify(res.data));
  //     this.setState({houses: res.data});
  //   });
  // }


  createProduct(text)
  {
    axios.post('/api/house', {text}).then( results => {
      console.log({text});
      this.setState({ houses: results.data });
  
    });
  }

  deleteProduct(id){
    console.log("in delete post" +id);
    axios.delete(`/api/house/${id}`).then(results =>{
      this.setState({houses: results.data});
    })
  }



  

  render() {
    return (
      <div>

        <Header />
        { routes }
        </div>

    );
  }
}

// function mapStateToProps( state ) {
//   return state
// }

// export default connect( mapStateToProps )( App );
export default App;
