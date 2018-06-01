import React, { Component } from 'react'; 
import axios from 'axios';

class Test extends Component{
  componentDidMount(){
    this.getUserData();
  }

  //requesting data from server: 
  async getUserData(){
    const response = await axios.get('/api/data')
     .then((data)=>{
       console.log(`This is from DB`)
     })
     .catch((err)=>{
       console.log(err);
     })
    console.log('This is the data:', response);
  
  }
  render(){
    return <h1> TESTING </h1>
  }

}

export default Test;