import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button, Container } from 'reactstrap';
import { isEmail } from 'validator';
import './SignUp.css';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            firstName: '',
            lastName: '',
            phone_no: '',
            address: '',
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

        if (data.firstName === '') errors.firstName = 'First Name can not be blank.';
        if (data.lastName === '') errors.lastName = 'Last Name can not be blank.';
        if (data.phone_no === '') errors.phone_no = 'Phone Number can not be blank.';
        if (data.address === '') errors.address = 'Address can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank';
        if (data.password === '') errors.password = 'Password must be valid.';

        return errors;
    }

    //https://ionicserverapp.herokuapp.com/trainee/register

    handleSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;
        const errors = this.validate();
        if (Object.keys(errors).length === 0) {
            console.log(data);
            //call api here
            fetch('https://ionicserverapp.herokuapp.com/trainee/register', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify(this.state)
            })
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }



    render() {
        const { data, errors } = this.state;
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <FormGroup className="firstName">
                            <Label className="label" for="firstName">First Name </Label>
                            <Input className="input" id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} />
                            <FormFeedback className="errors">{errors.firstName}</FormFeedback>
                        </FormGroup>

                        <FormGroup className="lastName">
                            <Label className="label" for="lastName">Last Name </Label>
                            <Input className="input" id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} />
                            <FormFeedback className="errors">{errors.lastName}</FormFeedback>
                        </FormGroup>

                        <FormGroup className="phone_no">
                            <Label className="label" for="phone_no">Phone Number </Label>
                            <Input className="input" id="phone_no" value={data.phone_no} invalid={errors.phone_no ? true : false} name="phone_no" onChange={this.handleChange} />
                            <FormFeedback className="errors">{errors.phone_no}</FormFeedback>
                        </FormGroup>

                        <FormGroup className="address">
                            <Label className="label" for="address">Address </Label>
                            <Input className="input" id="address" value={data.address} invalid={errors.address ? true : false} name="address" onChange={this.handleChange} />
                            <FormFeedback className="errors">{errors.address}</FormFeedback>
                        </FormGroup>

                        <FormGroup className="email">
                            <Label className="label" for="email">Email</Label>
                            <Input className="input" id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                            <FormFeedback className="errors">{errors.email}</FormFeedback>
                        </FormGroup>

                        <FormGroup className="password">
                            <Label className="label" for="password">Password </Label>
                            <Input className="input" id="password" value={data.password} type="password" invalid={errors.password ? true : false} name="password" onChange={this.handleChange} />
                            <FormFeedback className="errors">{errors.password}</FormFeedback>
                        </FormGroup>

                        <Button color="primary" type="submit" className="signup">SignUp</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;