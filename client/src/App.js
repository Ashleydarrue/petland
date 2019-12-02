import axios from "axios";
import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Pets from './components/pets/Pets';
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
      {/* <h4>Filters</h4>

      <form action="#">
    <p>
      <label>
        <input 
        type="checkbox" 
        checked = {this.state.gender}
        onChange ={(e) => {this.handleGender(e)}}
        />
        <span>Gender</span>
      </label>
    </p>
        </form>


        <button onClick ={(e)=> this.filterPets(e)}>
        Ugly button lol
        </button> */}
        
         <div className="allPetCards">
      {this.showPets()}
         </div>
    </div>
  );

 }
}

