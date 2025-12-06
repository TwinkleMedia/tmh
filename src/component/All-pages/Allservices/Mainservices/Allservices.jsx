import React from 'react';
import './allservices.css';


export default function Allservices ({Serviceh1,Serviceh1span,h4para,spanColor}) {

return(
    <>
    <div className='container'>
    <div className='row'>
        <div className='col-12  text-center mt-5 serv-head'>
            <h1>{Serviceh1} <span style={{color:spanColor||"inherit"}}>{Serviceh1span}</span></h1>
            <h4>{h4para}</h4>
            {/* <span className='animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto'></span> */}
        </div>
    </div>

   
        
    </div>

    </>
)

};
