import React from 'react';
import { useHistory } from 'react-router-dom';
import './about.css'
import './expertise.css'
import './contact.css'
import {About} from './about';
import {Expertise} from './expertise';
import {Contact} from './contact';
export function Home() {


    return (
        <div>
        <div className="Section1 d-flex">
            <div className="Section1_info">
                <p className="Section1_Heading1">Have you ever suffered from an injury?</p>
                <p className="Section1_Heading2">You Deserve To Be Compensated</p>
                <p className="Section1_Heading3">No Cost, No Obligation</p>
                <p className="Section1_Heading4">Call (915) 444-6999 to get a free consultation.</p>
            </div>
            <div className="Section1_form">
                <p className='Section1_form_heading1'>Suffered from an injury?</p>
                <p className='Section1_form_heading2'>Make Your Voice Heard</p>
                <select className='Section1_form_input' name="cars" id="cars">
                    <option value="None" selected="true" disabled>Select A Case Type</option>
                    <option value="Zantac">Zantac</option>
                    <option value="Paraquat">Paraquat</option>
                    <option value="3MEarplugs">3M Earplugs</option>
                    <option value="HerniaMesh">Hernia Mesh</option>
                </select>
                <button className='Section1_form_button' onClick={(e) => {
      e.preventDefault();
      window.location.href='/paraquat';
      }}>Get Tour free consultation</button>
                <p className='Section1_form_heading3'>Privacy Policy | Terms Of Use</p>
            </div>


        </div>
        <About>
        </About>
        <Expertise></Expertise>
        <Contact></Contact>
        </div>
        
      );

      
}
