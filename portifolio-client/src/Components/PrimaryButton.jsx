import React from 'react';
import Icofont from 'react-icofont';
const PrimaryButton = ({name, icon, buttonClass='' ,link='/',target=''}) => {
    return (
        <button className={buttonClass}>
            <a href={link} target={target} rel="noreferrer">
                <span>
                    <Icofont icon={icon}/> {name}
                </span>
            </a>
        </button>
    );
};

export default PrimaryButton;