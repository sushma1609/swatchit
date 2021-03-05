import React from "react";
//import { withRouter } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    country: "",
    city: ""
};

export default class ValiationForm extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let nameError = "";
        let emailError = "";
        // let passwordError = "";

        if (!this.state.name) {
            nameError = "name cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || nameError) {
            this.setState({ emailError, nameError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
            this.props.history.push('/Login');
        }
    };
    // submitForm(e) {
    //     e.preventDefault()
    //     this.props.history.push('/thank-you'); // <--- The page you want to redirect your user to.
    // }

    render() {
        return (
            <div class="background" >
                {/* <div className='container-fluid'> */}
                    <div class="area">
                        <form onSubmit={this.handleSubmit} className='border p-4 login-form mx-auto mt-5'>
                            <h1 className='font-weight-bold mb-5'><center>Register Your Account</center></h1>
                            <div class="textbox">
                                <input
                                    name="name"
                                    placeholder="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className='form-control mb-2'
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.nameError}
                                </div>
                            </div>
                            <div className="textbox">
                                <input
                                    name="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className='form-control mb-2'
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.emailError}
                                </div>
                            </div>
                            <div class="textbox">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className='form-control mb-2'
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                            </div>
                            <div class="textbox">
                                <input
                                    phone="country"
                                    placeholder="Country"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    className='form-control mb-2'
                                />
                                {/* <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.emailError}
                                    </div> */}
                            </div>
                            <div class="textbox">
                                <input
                                    name="city"
                                    placeholder="City"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    className='form-control mb-2'
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.nameError}
                                </div>
                            </div>


                            <button type='submit' className='btn btn-primary btn-block mt-5'>Register</button>

                        </form>

                        <div class='col-xs-3' >
                            <button type="button" className="btn block btn-success mr-2">Already have an account? Login</button>

                            {/* //<button type="button" className="btn block btn-danger">Create Account</button> */}

                        </div>


                    </div >
                </div>
            // </div>
        );

    }
}
