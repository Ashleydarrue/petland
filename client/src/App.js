import axios from "axios";
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Pets from './components/pets/Pets';
import './App.scss';

// const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export default class App extends Component{
   state = {
     petData: []
   }
  

  // This function gets all of the information on a user:
  getPet() {
    axios
      .get("http://localhost:5000/api/pets")
      .then(res => {
        this.setState({
          petData: res.data
        }, ()=> {
          console.log(this.state.petData)
        })
        console.log(`This is the information`);
        // console.log(petData);
      })
      .catch(err => {
        console.log(err);
      });
  } 
  
  showPets(){
    return this.state.petData.map(eachPet => {
      return(
        <Pets
        petType = {eachPet.petType}
        location =  {eachPet.location}
        breed = {eachPet.breed}
        gender = {eachPet.gender}
        refId = {eachPet.refId}
        dob = {eachPet.dob}
        name = {eachPet.name}
        img = {eachPet.img}
        />
      )
    })
  }
  
  componentDidMount() {
    this.getPet()
  }

  render (){
  return (
    <div className="App">
      <Nav/>
      <Header/>
      {this.showPets()}
    </div>
  );

 }
}

