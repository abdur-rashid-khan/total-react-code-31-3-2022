import React from 'react';

const ShowCount = (props) => {
   let border={
      border:'1px solid  red'
   };
   return (
      <div style={border}>
         <p>{props.number}</p>
      </div>
   );
};

export default ShowCount;