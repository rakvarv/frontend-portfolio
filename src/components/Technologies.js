import * as React from 'react';
import HTML5 from '../images/HTML5.svg.png'
import CSSLogo from '../images/CSS.png'
import Python from '../images/python.png'
import JS from '../images/JS.png'
import MySQL from '../images/mysql.png'
import PHP from '../images/PHP.png'
import Java from '../images/java.png'
import { Grid } from '@mui/material';


export default function Myskills() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <img style={{width:"256px"}}
                    src={HTML5}
                    alt={HTML5}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                    src={CSSLogo}
                    alt={CSSLogo}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Python}
                     alt={Python}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={JS}
                     alt={JS}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={MySQL}
                     alt={MySQL}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={PHP}
                     alt={PHP}
                />
            </Grid>
            <Grid item>
                <img style={{width:"256px"}}
                     src={Java}
                     alt={Java}
                />
            </Grid>
        </Grid>
    );
}