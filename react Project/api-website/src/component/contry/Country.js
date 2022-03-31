import React from 'react';

const Country = (props) => {
   const {area, region, name, flags}=props.data;
   return (
      <div className='country'>
         <img className='img' src={flags.png} alt="flag" />
         <h4 className='text'>Name : {name.common}</h4>
         <h4 className='text'>Region : {region}</h4>
         <h4 className='text'>Area Code : {area}</h4>
      </div>
   );
};

export default Country;