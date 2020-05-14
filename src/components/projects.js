import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './project';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
            <div className="projects-grid">
                {/*Project 1 - Values filtering*/}
                <Project 
                    projectPicture = "url(https://raw.githubusercontent.com/swedhag/portfolio2/master/public/infovis-pic.png) center / cover"
                    projectTitle = "World Values Survey - Interactive Visualization"
                    projectDescription = "For this project, I was interested in investigating the political, but also cultural climate of the countries included in the WVS (World Values Survey). A good dataset, spanning the 4 latest documented waves, or time periods, of the WVS was the one regarding active memberships in voluntary organizations. The project visualizes multivariate data, for which an appropriate visualization method is the parallel coordinate system. The interactive visualization supports both filtering by brushing and by using the search bar. Detailed information about each country is made available upon clicking a country's name. Developed with JavaScript and D3.js."
                    gitHub = "https://github.com/swedhag/dh2321-project2"
                    demo = "https://swedhag.github.io/dh2321-project2/"
                />

                {/*Group project - jobVis*/}
                <Project 
                    projectPicture = "url(https://i.ibb.co/y0cCkns/jobVis.png) center / cover"
                    projectTitle = "jobVis - Geography of Employment Ads"
                    projectDescription = "My team and I, who had been asked to develop and design a fully functioning analysis tool for the sales department at Blocket Jobb, made this service in the spring of 2019. The intended use of the tool is to map the quantity of employment ads posted on Blocket Jobb to its corresponding geographical location. Filtering of this data can be done through line of businesses and sub-categories of lines - as well as by trends in employment ads over time. Two modes of comparison is made available by the analysis tool. Users can either filter the data by ads posted over a time span, or by posted ad derivatives over a time span. Developed with JavaScript and D3.js."
                    gitHub = "https://github.com/fstal/jobVis"
                    demo = "https://fstal.github.io/jobVis/"
                />
                {/*Group project - Cloth animation*/}
                <Project 
                    projectPicture = "url(https://i.ibb.co/FXYw41y/piggy.png) center / cover"
                    //projectPicture = "url(https://i.ibb.co/xmtzBRp/portfolio-Piggy.png) center / cover"
                    projectTitle = "Pigman - A Cloth Cape Simulation"
                    projectDescription = "For this project, my friend and I were interested in developing a real-time cloth simulator. Besides just letting the cloth hang loose, we also wanted to enable cloth interactions with other forces than the gravitational. Hence, we implemented a collision detection algorithm for the cloth as well. Finally, our ideas materialized in the development of this cloth cape, attached to the back of our super hero, Pigman. The physical model used for the virtual cloth is known as the Mass Spring Model. Collision detection was accomplished through prohibiting invisible vertices in the cloth from passing through solid virtual geometry. This project was developed in Unity and coded with C#."
                    gitHub = "https://github.com/fstal/jobVis"
                    demo = "https://streamable.com/2394m"
                />
            </div>
                )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/*Project 1 - Librari*/}
                <Project 
                    projectPicture = "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
                    projectTitle = "React Project - Librari"
                    projectDescription = "Application made for organizing books read by the user. Created with React.js and utilizing the Google Books API. For the course DH2642 Interaction Programming and the Dynamic Web."
                    gitHub = "https://github.com/swedhag/Librari"
                    demo = "https://librari-41dab.firebaseapp.com/"
                />

                {/*Project 2 - BierGarten*/}
                <Project 
                    projectPicture = "url(https://cdn-images-1.medium.com/max/1109/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover"
                    projectTitle = "JavaScript/HTML Project - BierGarten"
                    projectDescription = " Mobile application running on the browser made for finding the closest park in Stockholm in which you could enjoy a mildly cold, alcoholic beverage. For the course DM2518 Mobile Development with Web Technologies."
                    gitHub = "https://github.com/lindbergerik/biergarten"
                    demo = "http://biergarten.nu/"
                />

                {/*Project 3 - Portfolio*/ }
                <Project 
                    projectPicture = "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
                    projectTitle = "React Project - Portfolio"
                    projectDescription = "My Portfolio, an application in which I can track my progress by listing past projects, as well as letting others get a hold of them as well. Created with React.js and the React-MDL library."
                    gitHub = "https://github.com/swedhag/portfolio"
                    demo = "https://myportfolio-4a48b.firebaseapp.com/"
                />
              </div>
                )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Placeholder2</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs style={{backgroundColor: 'white', marginLeft:'auto', marginRight:'auto', marginTop: '1%', display:'block', width: '95%', borderRadius: '10px', borderBottom:'0px'}} activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab style={{fontWeight:'bold'}}>Visualization & Computer Graphics</Tab>
                    <Tab style={{fontWeight:'bold'}}>Web Development</Tab>
                    <Tab style={{fontWeight:'bold'}}>UX Design</Tab>
                </Tabs>
                <div className="projects-container">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }

}
export default Projects