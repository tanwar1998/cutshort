import React from "react";
import { InputContainer } from './style.js';


const Component = (props) => {

    /**
     * 
     * @param {*
     *      style,
     *      isOptional,
     *      label,
     *      value,
     *      prependText,
     *      onSave
     * } props 
     */


        return (<InputContainer className='hor-row'
            style={props.style} >
                <div className="hor-row input-label">
                    {props.label}
                    {(props.isOptional ? <span style={{color: '#bfbfbf'}}>(optional)</span>: '')}

                </div>
                <div className="hor-row input-container-main">
                    {props.prependText && <div className="prepend-container-main">
                        {props.prependText}
                    </div>}
                    <input type = 'text' placeholder = { props.placeholder}
                        style = {{paddingLeft: props.prependText ? '130px' : '15px'}}
                        />
                </div>
                


        </InputContainer>
        )


}
export default Component;
