import React from 'react';
import './home.css';
import logo from "../../images/logo.png";
import pizzaImg from "../../images/pizza.png";
import vectorImg from "../../images/Vectorone.png";
import AboutUsComponent from '../../components/aboutUs/AboutUsComponent';
import Footer from '../../components/footer/Footer.components';
import LatestArticle from '../../components/latestArticles/LatestArticle';

function Home() {
    return (
        <div className='home'>
            <div className='home-div'>
                <div className='left-div'>
                    <div className='logo-div'>
                        <img src={logo} alt="site-logo" className='logo-img' />
                    </div>
                    <div className='content'>
                        <div className='content-title'>
                            Discover the
                            <span className='span-tag'> Best </span>Food and Drinks
                            <div className='content-subtitle'>
                                <p className='subtitle'>
                                    Naturally made Healthcare Products for the better care & support of your body.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className='explore-btn-div'>
                        <button className='explore-btn'>Explore now!</button>
                    </div>
                </div>
                <div className='right-div'>
                    <img src={pizzaImg} alt="pizza-img" className='pizza-img' />
                    <img src={vectorImg} alt="vector" className='vector' />
                </div>
            </div>
            <AboutUsComponent />
            <LatestArticle />
            <Footer />
        </div>
    )
}

export default Home;
