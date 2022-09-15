import React from "react";
import ButtonComponent from '../../../components/Button/index.jsx';
import CheckIcon from '@mui/icons-material/Check';

const Component = () => {
    


    return (
        <div className="hor-row launch-container-main">
            <div className="hor-row launch-icon-container">
                <div className="check-container">
                    <CheckIcon className="icon"/>
                </div>
            </div>
            <h2>
                Congratulations, Eren!
            </h2>
            <h4>
                You have completed onboarding, you can start using the Eden!
            </h4>
            <div className="hor-row planning-block-container">
            </div>
            <div className="hor-row container-main">
            {/* <div className="hor-row"> */}
                <ButtonComponent
                    label = 'Launch Eden'
                />
            </div>
        </div>
    )
}

export default Component;