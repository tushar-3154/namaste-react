import React from 'react';
import User from './User';

class About extends React.Component{

    constructor(props){
        super(props);

        // this.state= {
        //     name : "tushar",
        //     location: "botad"
        // }
        // console.log("parent constructor");

    }

    componentDidMount(){
        // console.log('parent component did mount');
    }
    render(){
        // console.log("parent Render");
        // const {name,location}= this.state;
        return(
            <div className='about'>
                <h1>About</h1>
                <h2>this is namaste react web series</h2>
                <User name={"Tushar"} location={"Botad"}/>
            </div>
        )
    }
}

export default About;