import axios from "axios";
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Pets from './components/pets/Pets';
import './App.scss';

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export default class App extends Component{
  

  // This function gets all of the information on a user:
  getPet() {
    axios
      .get(corsAnywhere + "http://localhost:5000/api/pets")
      .then(data => {
        console.log(`This is the information`);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("User we are searching for (INFO): ");
  }
  
  componentDidMount() {
    this.getPet()
  }

  render (){
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Pets/>
    </div>
  );

 }
}

