import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
        }
        this.updateEmailField = this.updateEmailField.bind(this);

    }

   
    updateEmailField = (e) => {
        this.setState({ email: e.target.value });
      
        
    }
    
    render() {
       
        return (
            
            <div>
                <div> Sign Up </div>
                <h1>email:{this.state.email}</h1>
                <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}></input>
            </div>

        );
    }
}

export default SignUp;