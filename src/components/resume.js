import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Employer from './employer';
import Skill from './skills';
class Resume extends Component {
    render() {
        return (
            <div className="resume-grid">
                <Grid style={{overflow: 'hidden', height: '100vh - 64px - 49px', width: '95%'}}>
                    <Cell className="resume-left-col" col={4}>
                        <Cell col={7} style={{ display:'block', float: 'left'}}>
                            <h2 style={{ paddingTop: '3%', paddingLeft:"16px", marginBottom: '5%', display: 'block', float:'left' }}>Carl Svedhag</h2>
                            {/*<h4 style={{ color: 'grey', paddingLeft:"16px" }}>Programmer</h4>*/}
                            <hr style={{ borderTop: '1px dotted grey', width: '50%', marginLeft:"16px"}} />
                            <p style={{ paddingLeft:"16px", width: '80%' }}>
                                Hi! I'm Carl, or Calle, a 24 year old master student of the Interactive Media Technology programme at KTH Royal Institute of Technology in Stockholm, Sweden. At the end of my bachelor's programme, I was largely specialized in software development with interaction design and UX in the primary focus. Later on at my master's programme, I've been further specializing in the fundamentals of computer visualization, with concepts such as shading, rasterization, raytracing, vector fields being highly prevalent. I hope you find the contents of this portfolio helpful! If by chance you are in need of contacting me, I've listed my contact information below. 
                            </p>
                            <hr style={{ borderTop: '1px dotted grey', width: '50%', marginLeft:"16px"}} />
                            <List>
                                <ListItem style={{paddingLeft: '20px'}}>
                                    <ListItemContent style={{fontSize: '20px'}}>
                                        <i className="fa fa-location-arrow" style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true"/>
                                        <p style={{display:'block', float:'left'}}>Kratsbodavägen 50 C, 168 65 Bromma</p>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px'}}>
                                        <i className="fa fa-phone-square"  style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true"/>
                                        <p style={{display:'block', float:'left'}}>+46 707 99 82 15</p>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px' }}>
                                        <a href="https://www.linkedin.com/in/carl-svedhag-2a4934109/" rel="noopener noreferrer" target="_blank" style={{color: 'black'}}>
                                            <i className="fa fa-linkedin-square" style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true" />
                                            <p style={{display:'block', float:'left'}}>Carl Svedhag</p>
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px' }}>
                                        <i className="fa fa-envelope" style={{display:'block', float:'left', marginRight: '15px'}} aria-hidden="true" />
                                        <p style={{display:'block', float:'left'}}>Svedhag@kth.se</p>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                            <hr style={{ borderTop: '1px dotted grey', width: '50%', marginLeft:"16px"}} />
                        </Cell>
                        <Cell col={5} style={{display:'block', float: 'left'}}>
                        <img src="https://librari-41dab.firebaseapp.com/static/media/calle.27c30049.png" alt="avatar" className="avatar-img" style={{paddingTop: '5%', display:'block', width:'200px', height:'200px', marginLeft:'auto', marginRight:'auto'}}/>
                        </Cell>  
                    </Cell>
                    <Cell style={{ height: '784px', overflowY: 'scroll'}} className="resume-right-col" col={8}>
                        <h2 style={{ fontSize: '36px', paddingLeft:"16px", marginTop: '0px' }}>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2015}
                            schoolName="Norra Real"
                            schoolDescription="Naturvetenskap inr. Naturvetenskap"
                        />

                        <Education
                            startYear={2015}
                            endYear={2020}
                            schoolName="KTH (Royal Institute of Technology)"
                            schoolDescription="Masters Degree in Computer Science with Specialization in Media Technology"
                        />
                        <hr style={{ borderTop: '3px dotted grey' }} />
                        <h2 style={{ fontSize: '36px', paddingLeft:"16px" }}>Employers</h2>
                        <Employer
                            startYear="Jan 2016"
                            endYear="June 2016"
                            jobName="MyAcademy"
                            jobDescription="A tutoring job for students attending Swedish high school. I was primarily tutoring maths and natural sciences."
                        />
                        <Employer
                            startYear={2017}
                            endYear={NaN}
                            jobName="Ivarsudde Kollo"
                            jobDescription="A summer camp located in the archipelago of the Swedish town Norrtälje. Tasks consist of everything, from setting up campsites and single-handedly cooking lunch for 60 people, to putting kids with homesickness to bed. A job demanding of many responsibilities. However, the responsibilites may vary based on the various day to day activities."
                        />
                        <hr style={{ borderTop: '3px dotted grey' }} />
                        <h2 style={{ fontSize: '36px', paddingLeft:"16px", marginBottom: '1%'  }}>Skills</h2>
                        <Skill
                            skill="C++"
                            progress={50}
                        />
                        <Skill
                            skill="Python"
                            progress={50}
                        />
                        <Skill
                            skill="Java"
                            progress={65}
                        />
                        <Skill
                            skill="HTML/CSS"
                            progress={65}
                        />
                        <Skill
                            skill="JavaScript"
                            progress={65}
                        />
                        <Skill
                            skill="React.js"
                            progress={40}
                        />
                        <Skill
                            skill="D3.JS"
                            progress={50}
                        />                        
                        <Skill
                            skill="C#"
                            progress={45}
                        />
                        <Skill
                            skill="PHP"
                            progress={30}
                        />
                    </Cell>
                </Grid>
            </div>
            )
    }

}
export default Resume