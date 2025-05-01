import React from 'react';
import UserContext from '../utils/UserContext';
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
        return(
            <div className='about'>
                <h1>About</h1>
                <h2>this is namaste react web series</h2>
                <User name={"Tushar"} location={"Botad"}/>

                <div>
                    UserLoggedIn: <UserContext.Consumer>
                        {(data)=> {
                            return(
                                <h1 className="text-2xl font-bold">{data.loggedIn}</h1>
                            )
                        }
                    }
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default About;