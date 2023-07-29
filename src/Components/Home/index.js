import React from 'react';
import './style.css'
const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container">
                    <div className="home-information">
                        <h2 className="home-title margin-bottom">Mahmoud Tamer</h2>
                        <h4 className="home-info">Creative Director</h4>
                        <p className="home-desc">
                            Iam a professional <span>Front-End Developer</span> creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                        </p>
                        <button className="home-btn">Let's Begin</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;