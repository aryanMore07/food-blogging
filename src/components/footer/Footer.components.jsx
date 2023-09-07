import React from 'react';
import './footer.styles.css';
import logo from '../../images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-logo-div'>
                <img src={logo} alt="logo" />
            </div>
            <div className='contact-us'>
                <h4 className='contact-header footer-primary'>Contact Us</h4>
                <ul className='ul-element'>
                    <li className='li-elements footer-secondary'>B-201 CLASSIQUE CHS LTD, LINK ROAD, EVERSHINE NAGAR, PLOT NO 14 & 44 MALAD MUMBAI Mumbai City MH 400064 IN</li>
                    <li className='li-elements footer-secondary'>example@mail.com</li>
                    <li className='li-elements footer-secondary'>(901)443-0343</li>
                </ul>
            </div>
            <div className='more-section'>
                <h4 className='footer-primary more-header'>More</h4>
                <ul className='ul-element'>
                    <li className="li-elements">About Us</li>
                    <li className="li-elements">Products</li>
                    <li className="li-elements">Career</li>
                    <li className="li-elements">Contact Us</li>
                </ul>
            </div>
            <div className='social-links'>
                <div>
                    <h4 className='footer-primary social-links-header'>Social Links</h4>
                    <div className='social-icons footer-primary'>
                        <span className='icons'><InstagramIcon /></span>
                        <span className='icons'><TwitterIcon /></span>
                        <span className='icons'><FacebookIcon /></span>
                    </div>
                </div>
                <div> <p className='footer-secondary'>  © 2022 Food Truck Example </p></div>
            </div>
        </footer>
    )
}

export default Footer
