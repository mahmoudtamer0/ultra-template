import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
const Social = () => {

    const [socials, setSocials] = useState([]);

    useEffect(() => {
        axios.get('data.json').then(res => setSocials(res.data.social))
    }, [])

    let sociallist = socials.map(socialitem => {
        return (
            <div className="social face" key={socialitem.id}>
                <i className={socialitem.icon}></i>
                <p>
                    <span className="info1">{socialitem.title}</span>
                    <span className="info2">{socialitem.body}</span>
                </p>
            </div>
        )
    })
    return (
        <div className="social-media">

            {sociallist}
        </div>

    );
}

export default Social;