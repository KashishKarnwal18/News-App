import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button, Container } from 'reactstrap';
import { isEmail } from 'validator';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            email: '',
            password: ''
        },
        errors: {}
    })

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank';
        if (data.password === '') errors.password = 'Password must be valid.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;
        const errors = this.validate();
        if (Object.keys(errors).length === 0) {
            console.log(data);
            //call api here
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }



    render() {
        const { data, errors } = this.state;
        return (
            <div className="wrapper1">
                <div className="form-wrapper1">
                    <Form className="form1" onSubmit={this.handleSubmit}>
                        <FormGroup className="email1">
                            <Label className="label1" for="email"> Email</Label>
                            <Input className="input1" id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                            <FormFeedback className="errors1">{errors.email}</FormFeedback>
                        </FormGroup>

                        <FormGroup className="password1">
                            <Label className="label1" for="password">Password </Label>
                            <Input className="input1" id="password" value={data.password} type="password" invalid={errors.password ? true : false} name="password" onChange={this.handleChange} />
                            <FormFeedback className="errors1">{errors.password}</FormFeedback>
                        </FormGroup>

                        <Button color="primary" type="submit" className="login">Login</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;