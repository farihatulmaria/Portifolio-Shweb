import React from 'react';
import Icofont from 'react-icofont';
const PrimaryButton = ({name,icon,buttonClass=''}) => {
    return (
        <button className={buttonClass}>
            <span>
                <Icofont icon={icon}/>  {name}
            </span>
        </button>
    );
};

export default PrimaryButton;