import React, {Component} from 'react';


class Login extends Component {
    constructor(props){
        super(props);
        this.state= {
            username: '',
            password: ''
        };
    }

    inputHandler=input=>{
        this.setState({ [input.target.name]: input.target.value })
    }

    loginSubmitHandler=()=>{
        // const user=this.state.username;
        // localStorage.setItem('user',user);
        this.props.toggleLogIn()
    }

    render(){
        return(
            <form className="login">
                <label className= "loginheader">
                    Party Planner Login!
                </label>
                <input className= "loginform"
                type="username"               
                placeholder="Username"                
                name="username"                
                value={this.state.username}                
                onChange={this.inputHandler}  
                >
                </input>

                <input
                type="password"               
                placeholder="Please Enter Password"                
                name="password"                
                value={this.state.password}                
                onChange={this.inputHandler}  
                >

                </input>
                <button onClick={this.loginSubmitHandler}>
                    Log In
                </button>
            </form>
        );
    }
}


export default Login