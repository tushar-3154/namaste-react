import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state ={
          userInfo:{  
            name: "Dummy",
            location: "Default",
          }

        }
        console.log(this.props.name+"child constructor");
    }

   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/tushar-3154");
    const json = await data.json();
        
        console.log("json data",json);

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }
    
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }
    render(){
        // console.log('child render');

        const {name, location, avatar_url}=this.state.userInfo;
        // const {name,location}= this.props;
        // const {count} = this.state;
         
        return(
            <div className="user-card">

            <img src={avatar_url}></img>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Contact: @tushar31</h3>
            </div>
        )
    }
}

export default UserClass;