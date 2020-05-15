import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions,  Button } from 'react-mdl';

class Project extends Component {
    render() {
        let buffer = [];
        if (this.props.gitHub != "") buffer.push(<Button href={this.props.gitHub} colored target="_blank">GitHub</Button>);
        if (this.props.demo != "") buffer.push(<Button href={this.props.demo} colored target="_blank">Demo</Button>);
        if (this.props.report != "") buffer.push(<Button href={this.props.report} colored target="_blank">Paper</Button>);
        if (this.props.video != "") buffer.push(<Button href={this.props.video} colored target="_blank">Video</Button>);
        return (
            <Card shadow={4} style={{ width: '450', height: 'auto', margin: 'auto' }}>
                <CardTitle expand style={{ color: this.props.textColor, height: '176px',fontWeight: 'italics', fontSize: 'px', background: this.props.projectPicture, backgroundColor: 'rgb(0, 0, 0)'  }}>{this.props.projectTitle}</CardTitle>
                <CardText style={{ color: 'black'}}>
                    {this.props.projectDescription}
                </CardText>
                <CardActions border>
                {buffer}
                </CardActions>
            </Card>
            )
    }
}

export default Project;