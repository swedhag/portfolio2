import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://librari-41dab.firebaseapp.com/static/media/calle.27c30049.png" alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                        <h1> Visualization | Web Development | UX Design </h1>
                            {/*<hr />
                            <p> HTML/CSS | JavaScript | Bootstrap | D3 | React | Python | SQL</p>
                            <div className="social-links">

                                
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" style={{fontSize: '40px'}} />
                                </a>
                                
                                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square"   aria-hidden="true" style={{fontSize: '40px'}} />
                                </a>
                                
                                <a href="https://github.com/swedhag" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" style={{fontSize: '40px'}} />
                                </a>

                            </div>
                            */}
                                <a href="https://www.linkedin.com/in/carl-svedhag-2a4934109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" style={{fontSize: '40px', color: "white"}} />
                                </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default LandingPage