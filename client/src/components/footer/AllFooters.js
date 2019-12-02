import React from 'react';
import './Footer.scss'
import Footer from './Footer.js';

export default function AllFooters(props) {
  return (
    <div className="allFooters">
               <Footer
         city = "Pembroke Pines"
         address = "356 N University Drive Pembroke Pines, FL 33024"
         schedule = "Monday - Sunday	
         10:00 am - 9:00 pm"
         />
                  <Footer
         city = "Plantation"
         address = "801 South University Drive Suite #C-106 Plantation, FL 33324"
         schedule = "Monday - Sunday	
         10:00 am - 9:00 pm"
         />
                  <Footer
         city = "Davie"
         address = "11482 W State Road 84 Davie, FL 33325

         "
         schedule = "Monday - Sunday	
         10:00 am - 9:00 pm"
         />
                  <Footer
         city = "Kendall"
         address = "8236 Mills Drive Miami, FL 33183

         "
         schedule = "Monday - Sunday	
         10:00 am - 9:00 pm"
         />
                  <Footer
         city = "Largo"
         address = "10289 Ulmerton Rd Largo, FL 33771"
         schedule = "Monday - Sunday	
         10:00 am - 9:00 pm"
         />
         <div class = 'ourCompany'>
  <h5><span><i class="fas fa-paw"></i></span>Our Company</h5>
  <p>FAQ</p>
  <br/>
  <p>EMPLOYMENT OPPORTUNITIES</p>
  </div>
    </div>
  )
}
