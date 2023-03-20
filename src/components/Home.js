import React from 'react';

export function Home() {

    return (
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
                    <option value="volvo">Case Type 1</option>
                    <option value="saab">Case Type 2</option>
                    <option value="opel">Case Type 3</option>
                    <option value="audi">Case Type 4</option>
                </select>
                <button className='Section1_form_button'>Get Tour free consultation</button>
                <p className='Section1_form_heading3'>Privacy Policy | Terms Of Use</p>
            </div>
        </div>
      );
}
