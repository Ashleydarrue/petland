import axios from "axios";
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Pets from './components/pets/Pets';
import ScrollUp from './components/scrollup/Scrollup'
import Sidenav from './components/sidenav/Sidenav';
import Footer from './components/footer/Footer';
import AllFooters from './components/footer/AllFooters';
import FilterNav from './components/filterNav/FilterNav';


import './App.scss';

// const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

export default class App extends Component{
   state = {
     petData: [],
     filteredData: [],
     gender: true
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

  // filterPets(e) {
  //   console.log(this.state.petData)
  //   e.preventDefault()
  //   // console.log(this.state.petData)
  //   let males = this.state.petData.filter(pet => 
  //       pet.gender === 'Male' &&
  //       pet.location === 'Plantation'
  //     )
  //     console.log(males)

  //   // copy.filter()
  // }

  // handleGender(e) {
  //   const target = e.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   // const name = target.name;
  //   console.log(value)

  //   this.setState({
  //     gender: value
  //   });
  // }
  
  showPets(){
    return this.state.petData.map(eachPet => {
      return(
        <Pets
        Key= {eachPet.Id}
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
      <Sidenav/>
      <FilterNav/>
         <div className="allPetCards">
      {this.showPets()}
         </div>
         <ScrollUp/>
<AllFooters/>

    </div>
    
  );

 }
}

