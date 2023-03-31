import * as React from 'react';
import Git from '../images/skills/Git.png'
import Figma from '../images/skills/figma.png'
import IJ from '../images/skills/IJ.png'
import VSC from '../images/skills/vsc.png'

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