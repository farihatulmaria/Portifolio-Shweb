import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const HireMe = () => {
    return (
        <section id='call-to-action' className='my-5 text-center'>
            <div className="container py-5">
                <h2 className='fw-bold'>HIRE ME FOR YOUR PROJECT</h2>
                <PrimaryButton name={'HIRE ME ON > UPWORK'} icon={'search-user'} buttonClass={'my-4'}/>
            </div>
        </section>
    );
};

export default HireMe;


/* https://www.upwork.com/freelancers/freelancewordpressdeveloper */