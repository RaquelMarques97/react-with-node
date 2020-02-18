import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SnackbarContent } from '@material-ui/core';




class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordconf: "",
            name: "",
            lastname: "",
            flash: ""
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
        console.log('here')
        fetch("/auth/signup",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ "flash": res.flash }),
                err => this.setState({ "flash": err.flash })

            );


        e.preventDefault();

    }

    render() {

        return (

            <div>
                <h1> Sign Up </h1>
                <h1>{JSON.stringify(this.state, 1, 1)}</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <TextField type="email" name="email" value={this.state.email} onChange={this.updateDataField}></TextField>
                    </div>
                    <div>
                        <label>password</label>
                        <TextField type="text" name="password" value={this.state.password} onChange={this.updateDataField}></TextField>
                    </div>
                    <div>
                        <label>password confirmation</label>
                        <TextField type="text" name="passwordconf" value={this.state.passwordconf} onChange={this.updateDataField} />
                    </div>
                    <div>
                        <label>Name</label>
                        <TextField type="text" name="name" value={this.state.name} onChange={this.updateDataField} />
                    </div>
                    <div>
                        <label>Last name</label>
                        <TextField type="text" name="lastname" value={this.state.lastname} onChange={this.updateDataField} />
                    </div>

                    <Button type='submit' variant="outlined" color="primary" >
                        Submit
                    </Button>
                    <SnackbarContent message={this.state.flash} />

                </form>

            </div>

        );
    }
}

export default SignUp;