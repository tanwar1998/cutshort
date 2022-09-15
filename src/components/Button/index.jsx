import React from "react";
import { ButtonContainer } from './style.js';


const Component = (props) => {

    /**
     * 
     * @param {*
     *      style,
     *      label,
     *      value,
     *      onSave
     * } props 
     */


        return (<ButtonContainer className='hor-row'
            style={props.style} >
                <div className="hor-row">
                    <button>
                        {props.label}
                    </button>
                </div>


        </ButtonContainer>
        )


}
export default Component;
