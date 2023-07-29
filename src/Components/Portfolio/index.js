import React, { useState, useEffect } from 'react';
import './style.css'
import axios from 'axios';

const Portfolio = () => {

    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get('data.json').then(res => setImages(res.data.portfolio))
    }, [])
    let imageslist = images.map(image => {
        return (
            <div key={image.id}>
                <img src={image.image} alt="" />
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
        )
    })
    return (
        <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>

            <div className="box">

                {imageslist}
            </div>

        </div>
    );
}

export default Portfolio;