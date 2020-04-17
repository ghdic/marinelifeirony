import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customer = {
  'name': 'marine',
  'birthday':'19960728',
  'gender':'man',
  'job':'student'
}

class App extends Component{
  render(){
    return(
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
