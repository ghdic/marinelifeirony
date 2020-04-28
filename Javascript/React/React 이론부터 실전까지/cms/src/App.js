import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
{
  'id': 1,
  'image': 'http://placeimg.com/64/64/any',
  'name': 'marine',
  'birthday':'19960728',
  'gender':'man',
  'job':'student'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/any',
  'name': 'justin bibu',
  'birthday':'20170728',
  'gender':'man',
  'job':'baby'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/any',
  'name': 'jane',
  'birthday':'19961111',
  'gender':'female',
  'job':'professor'
}
]

class App extends Component{
  render(){
    return(
      <div>
      {
        customers.map(c => {
          return (<Customer id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
        })
      }
      </div>
    );
  }
}

export default App;
