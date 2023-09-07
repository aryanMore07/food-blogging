import React from 'react';
import './aboutUscomponent.css';
import aboutsImg from "../../images/Mask Group.png";

function AboutUsComponent() {
    return (
        <div className='about-us-section'>
            <div className='aboutus-img-div'>
                <img src={aboutsImg} alt="aboutus-img" />
            </div>
            <div className='aboutus-desc'>
                <div>
                    <p className='about-us-title'>About us</p>
                    <p className='about-us-content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit corrupti excepturi eaque nihil quam illum ducimus consequatur quisquam natus cupiditate tempora, officiis in deleniti consequuntur, totam corporis iure dolore ad ipsum assumenda similique.
                    </p>
                </div>
                <div className='readmore-btn-div'>
                    <button className='readmore-btn'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUsComponent
