import * as React from 'react';
import Git from '../images/Git.png'
import Figma from '../images/figma.png'
import IJ from '../images/IJ.png'
import VSC from '../images/vsc.png'

export default function StandardImageList() {
    const images = [
        Git,
        Figma,
        IJ,
        VSC
        
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