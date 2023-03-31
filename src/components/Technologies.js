import * as React from 'react';
import HTML5 from '../images/HTML5.svg.png'
import CSSLogo from '../images/CSS.png'
import Python from '../images/python.png'
import JS from '../images/JS.png'
import MySQL from '../images/mysql.png'
import PHP from '../images/PHP.png'
import Java from '../images/java.png'
// import { Grid } from '@mui/material';


export default function Myskills() {
    const images = [
        HTML5,
        CSSLogo,
        Python,
        JS,
        MySQL,
        PHP,
        Java
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