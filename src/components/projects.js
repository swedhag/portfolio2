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
                {/*WVS Values filtering*/}
                <Project 
                    projectPicture = "url(https://raw.githubusercontent.com/swedhag/portfolio2/master/public/infovis-pic.png) center / cover"
                    projectTitle = "World Values Survey - Interactive Visualization"
                    projectDescription = "For this project, I was interested in investigating the political, but also cultural climate of the countries included in the WVS (World Values Survey). A good dataset, spanning the 4 latest documented waves, or time periods, of the WVS was the one regarding active memberships in voluntary organizations. The project visualizes multivariate data, for which an appropriate visualization method is the parallel coordinate system. The interactive visualization supports both filtering by brushing and by using the search bar. Detailed information about each country is made available upon clicking a country's name. This project was developed with JavaScript and D3.js."
                    gitHub = "https://github.com/swedhag/dh2321-project2"
                    demo = "https://swedhag.github.io/dh2321-project2/"
                    report = ""
                    video = ""
                    textColor = "black"
                />

                {/*jobVis*/}
                <Project 
                    projectPicture = "url(https://raw.githubusercontent.com/swedhag/portfolio2/master/public/jobVis.png) center / cover"
                    projectTitle = "jobVis - Geography of Employment Ads"
                    projectDescription = "My team and I, who had been asked to develop and design a fully functioning analysis tool for the sales department at Blocket Jobb, made this service in the spring of 2019. The intended use of the tool is to map the quantity of employment ads posted on Blocket Jobb to its corresponding geographical location. Filtering of this data can be done through line of businesses and sub-categories of lines - as well as by trends in employment ads over time. Two modes of comparison is made available by the analysis tool. Users can either filter the data by ads posted over a time span, or by posted ad derivatives over a time span. This project was developed with JavaScript and D3.js."
                    gitHub = "https://github.com/fstal/jobVis"
                    demo = "https://fstal.github.io/jobVis/"
                    report = ""
                    video = ""
                    textColor = "black"
                />
                {/*Cloth animation*/}
                <Project 
                    projectPicture = "url(https://raw.githubusercontent.com/swedhag/portfolio2/master/public/piggy.png) center / cover"
                    //projectPicture = "url(https://i.ibb.co/xmtzBRp/portfolio-Piggy.png) center / cover"
                    projectTitle = "Pigman - A Cloth Cape Simulation"
                    projectDescription = "For this project, my friend and I were interested in developing a real-time cloth simulator. Besides just letting the cloth hang loose, we also wanted to enable cloth interactions with other forces than the gravitational. Hence, we implemented a collision detection algorithm for the cloth as well. Finally, our ideas materialized in the development of this cloth cape, attached to the back of our super hero, Pigman. The physical model used for the virtual cloth is known as the Mass Spring Model. Collision detection was accomplished through prohibiting invisible vertices in the cloth from passing through solid virtual geometry. This project was developed in Unity and coded with C#."
                    gitHub = ""
                    demo = ""
                    report = "https://drive.google.com/file/d/1ViiEC5TRZpxFG3rO2MMbbqM5k33boTty/view?usp=sharing"
                    video = "https://streamable.com/2394m"
                    textColor = "black"
                />
            </div>
                )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/*Master Thesis*/}
                    <Project 
                        projectPicture = "url(https://i.ibb.co/Wy02PLT/master.png) center / cover"
                        projectTitle = "Master Thesis"
                        projectDescription = "For my Master thesis, I was tasked with quanitatively investigating the visual performance of 2D Treemap animations. These animations were to be optimized, in regard to 2D Treemap stability, by translating the results of a 1D Treemap rendering algorithm to the 2D case. The translation required programming in both C++ and Java. In the end, the translation was succesful and the results showed clear evidence for 2D Treemap animation, generated with the Slice-and-Dice layout, being stabilized by the 1D rendering algorithm. The paper will be published here once it has passed through the grading administration and has been posted online. "
                        gitHub= ""
                        demo = ""
                        report = ""
                        video = "https://drive.google.com/file/d/1qYO2s_kD3bxxyZ0bS_ipdTb-7dvb34OP/view?usp=sharing"
                        textColor = "black"
                    />

                    {/*Bachelor Thesis*/}
                    <Project 
                        projectPicture = "url(https://i.ibb.co/tz1hkJ5/bachelor.png) center / cover"
                        projectTitle = "Bachelor Thesis"
                        projectDescription = "Paired with my writing partner, our Bachelor thesis aimed to investigate the effects of positively reinforcing sounds in online gambling. In particular, we sought to determine whether the risk taking of online gamblers was affected by such sound effects. Consequently, we set about developing a Black Jack game with pre-programmed hands and outcomes for every user. 41 users were rounded up to play the game and for each one of these, we logged the size of each bet and the time spent on each round. The surprising findings of our experiment can be accessed by reading the paper attached below. The Black Jack game was coded in Java."
                        gitHub= ""
                        demo = ""
                        report = "http://www.diva-portal.org/smash/record.jsf?dswid=-3133&pid=diva2%3A1229511&c=1&searchType=SIMPLE&language=sv&query=svedhag&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all"
                        video = ""
                        textColor = "black"
                    />

                    {/*TouARs*/}
                    <Project 
                        projectPicture = "url(https://i.ibb.co/JBPbwXt/TouARs.jpg) center / cover"
                        projectTitle = "TouARs - An AR Tour Guide"
                        projectDescription = "For this project, my team and I were interested in developing an Augmented Reality (AR) service. Due to the fact that some of us were history buffs, it was decided we should develop a virtual and historical tour guide. Along with the development of the AR service, we set out with the task of investigating the opportunity for services like this one to exist in the smart tourism industry of the near future. A qualitative study was consequently conducted, during which users got to interact with a small mock-up city tour, set up in one of the computer labs of KTH. The service was developed in Unity, along with the Vuforia AR SDK, and programmed in C#."
                        gitHub = ""
                        demo = ""
                        report = "https://drive.google.com/file/d/1H-Bs8wRzXwdsXaChr0XppFZBIp_neBy5/view"
                        video = "https://vimeo.com/336662928"
                        textColor = "black"
                    />

              </div>
                )
        }
        else if (this.state.activeTab === 2) {
            return (
                 <div className="projects-grid">
                {/*Librari*/}
                <Project 
                    projectPicture = "url(https://i.ibb.co/MgZG75Q/Librari.png) center / cover"
                    projectTitle = "Librari - an Online Library"
                    projectDescription = "Librari is a web application which my project group and I made in the spring of 2018. Developed with the Google Books API, the intention behind the application was to provide a natural place for users to organize their digital libraries. The application is hosted with Firebase, a Google service which also provided us with user authentication functionalities. Upon registering and logging into the app, users are able to search and find any books in the API and store them on labelled and personalizable book shelves in the MyLibrari page. Nielsen's heuristics were largely considered in the development of the app. The app was coded in JSX and utilizes the React.js framework."
                    gitHub = "https://github.com/swedhag/Librari2"
                    demo = "https://librari-41dab.firebaseapp.com/"
                    report = ""
                    video = ""
                    textColor = "black"
                />

                {/*Portfolio*/ }
                <Project 
                    projectPicture = "url(https://i.ibb.co/4drsrGz/portfolio-Pic.png) center / cover"
                    projectTitle = "My Portfolio"
                    projectDescription = "I created this portfolio with two key purposes in mind. On one hand, this site should work as a place in which I can track my progress in terms of project work. With 5 years of studies at KTH under my belt, the projects I have undertaken are scattered all over the web. Either in submission forms on the KTH school web, on GitHub or at DiVA, to name a few places. For myself, I want this to be the place in which I can gather the work I am most proud of. A second purpose of this site is to showcase my work and provide examples of my competences. Some would say my program at KTH has a rather broad scope. I hope this broadness is somewhat reflected by this portfolio."
                    gitHub = "https://github.com/swedhag/portfolio2"
                    demo = "https://swedhag.github.io/portfolio2"
                    report = ""
                    video = ""
                    textColor = "white"
                />
              </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs style={{backgroundColor: 'white', marginLeft:'auto', marginRight:'auto', marginTop: '1%', display:'block', width: '95%', borderRadius: '10px', borderBottom:'0px'}} activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab style={{fontWeight:'bold'}}>Visualization & Computer Graphics</Tab>
                    <Tab style={{fontWeight:'bold'}}>Research Projects</Tab>
                    <Tab style={{fontWeight:'bold'}}>Other</Tab>
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