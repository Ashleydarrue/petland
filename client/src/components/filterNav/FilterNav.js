import React from 'react';
import './FilterNav.scss';
import M from 'materialize-css';

export default function FilterNav() {
  M.AutoInit();

  return (
    <div className="filterContainer">
    <nav className="filterNav">
       <div class="nav-wrapper navContainer">

       <div class="input-field col s6">
         
    <select multiple>
      <option value="defaultValue" disabled selected>All Locations</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>

  <div class="input-field col s6">
    <select multiple>
      <option value="defaultValue" disabled selected>pet type</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>


  <div class="input-field col s6">
    <select multiple>
      <option value="defaultValue" disabled selected>breed</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>

  <div class="input-field col s6">
    <select multiple>
      <option value="defaultValue" disabled selected>Gender</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
         </div>
    </nav>
    </div>
  )
}

 