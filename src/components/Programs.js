import * as React from 'react';
import SLogo from '../images/skills/springboot.png'
import Flask from '../images/skills/flask.png'
import Boostrap from '../images/skills/Bootstrap_logo.svg.png'

export default function StandardImageList() {
    const images = [
        SLogo,
        Flask,
        Boostrap
        
    ]

    
    return (
        <div className="image-flexbox">
        {images.map((imageUrl, index) => (
            <div key={index} className="image-container">
            <img src={imageUrl} alt={`Image ${index}`} />
            </div>
        ))}
        </div>
    );
}
