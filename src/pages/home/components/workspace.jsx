import React from "react";
import InputComponent from '../../../components/Input/index.jsx';
import ButtonComponent from '../../../components/Button/index.jsx';

const Component = () => {
    


    return (
        <div className="hor-row welcome-container-main">
            <h2>
                Let's setup a home for all your work
            </h2>
            <h4>
                You can always create another workspace later.
            </h4>
            <div className="hor-row container-main">            
                <div className="hor-row">
                    <InputComponent
                        placeholder = 'Eden'
                        label = 'Workspace Name'
                    />
                </div>
                <div className="hor-row">
                    <InputComponent
                        placeholder = 'Example'
                        label = 'Workspace URL'
                        isOptional = { true }
                        prependText =  'www.eden.com/'
                    />
                </div>
                <div className="hor-row">
                    <ButtonComponent
                        label = 'Create Workspace'
                    />
                </div>
            </div>
        </div>
    )
}

export default Component;