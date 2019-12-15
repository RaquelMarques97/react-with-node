import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordconf: "",
            name: "",
            lastname: "",
        }
        this.updateDataField = this.updateDataField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    updateDataField = (e) => {

        this.setState({
            [e.target.name]: e.target.value,
            
        });
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault();
        
    }

    render() {
      
        return (

            <div>
                <div> Sign Up </div>
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.updateDataField}></input>
                    </div>
                    <div>
                        <label>password</label>
                        <input type="text" name="password" value={this.state.password} onChange={this.updateDataField}></input>
                    </div>
                    <div>
                        <label>password confirmation</label>
                        <input type="text" name="passwordconf" value={this.state.passwordconf} onChange={this.updateDataField}></input>
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.updateDataField} ></input>
                    </div>
                    <div>
                        <label>Last name</label>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateDataField} ></input>
                    </div>
                    <input type="submit" value="Submit" />
                </form>

            </div>

        );
    }
}

export default SignUp;