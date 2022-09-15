import React from "react";
import InputComponent from '../../../components/Input/index.jsx';
import ButtonComponent from '../../../components/Button/index.jsx';

const Component = () => {
    


    return (
        <div className="hor-row welcome-container-main">
            <h2>
                Welcome! First things first...
            </h2>
            <h4>
                You can always change them later.
            </h4>
            <div className="hor-row container-main">
                <div className="hor-row">
                    <InputComponent
                        placeholder = 'Steve Jobs'
                        label = 'Full Name'
                    />
                </div>
                <div className="hor-row">
                    <InputComponent
                        placeholder = 'Steve'
                        label = 'Display Name'
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