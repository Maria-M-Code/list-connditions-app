import React from 'react';






const validation = ( props ) => {

    let validMesage = "Text too short!";

    if (props.inputLength >=5 ) {
        validMesage = "Text too long!";
    }
    return (
        <div>
            <p>{validMesage}</p>                 
        </div>
    )
};

export default validation;