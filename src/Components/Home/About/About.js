import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='order-bg py-5'>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1 className="fw-bold text-center text-gradient mt-5">
                    Delicious Food,<br/>
                    One Step To Making A Good Start <br/>
                    <span className="fw-bold text-gradient">HungryMonster</span>
                </h1>
                <p className="card-footer border-0 text-center text-light mt-lg-5 mt-4 mb-5 mb-lg-5">
                    PROCEED TO ORDER <i className="fas fa-chevron-right"/>
                </p>
            </div>
        </div>
    );
};

export default About;