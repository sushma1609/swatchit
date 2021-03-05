// import React from 'react';
// const initialState = {
//     name: "",
//     email: "",
//     password: "",
//     nameError: "",
//     emailError: "",
//     passwordError: ""
// };

// export default class ValiationForm extends React.Component {
//     state = initialState;

//     handleChange = event => {
//         const isCheckbox = event.target.type === "checkbox";
//         this.setState({
//             [event.target.name]: isCheckbox
//                 ? event.target.checked
//                 : event.target.value
//         });
//     };

//     validate = () => {
//         let nameError = "";
//         let emailError = "";
//         // let passwordError = "";

//         if (!this.state.name) {
//             nameError = "name cannot be blank";
//         }

//         if (!this.state.email.includes("@")) {
//             emailError = "invalid email";
//         }

//         if (emailError || nameError) {
//             this.setState({ emailError, nameError });
//             return false;
//         }

//         return true;
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         const isValid = this.validate();
//         if (isValid) {
//             console.log(this.state);

//             this.props.history.push('/dashboard')

//         }
//         //     // clear form


//     }


// }
// render() {


//     return (

//         <div class='login-box'>
//             <h1>Login</h1>
//             <form onSubmit={this.handleSubmit} className='border p-4 login-form mx-auto mt-5'>
//                 <h1 className='font-weight-bold mb-5'><center>Login Your Account</center></h1>
//                 <div>
//                     <input
//                         name="name"
//                         placeholder="name"
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         className='form-control mb-2'
//                     />
//                     <div style={{ fontSize: 12, color: "red" }}>
//                         {this.state.nameError}
//                     </div>
//                 </div>
//                 <div>
//                     <input
//                         name="email"
//                         placeholder="email"
//                         value={this.state.email}
//                         onChange={this.handleChange}
//                         className='form-control mb-2'
//                     />
//                     <div style={{ fontSize: 12, color: "red" }}>
//                         {this.state.emailError}
//                     </div>
//                 </div>
//                 <div>
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="password"
//                         value={this.state.password}
//                         onChange={this.handleChange}
//                         className='form-control mb-2'
//                     />
//                     <div style={{ fontSize: 12, color: "red" }}>
//                         {this.state.passwordError}
//                     </div>
//                 </div>


//                 <button type='submit' className='btn btn-primary btn-block mt-5'>Login</button>
//                 <br />
//                 <br />

//                 <div class='col-xs-3' >
//                     <button type="button" className="btn block btn-warning mr-2">Cancel</button>

//                     <button type="button" className="btn block btn-danger">Forgot password?</button>

//                 </div>





//             </form>


//             <div class="textbox">
//                 <i class="fas fa-user"></i>
//                 <input type="text" placeholder="Username" />
//             </div>

//             <div class="textbox">
//                 <i class="fas fa-lock"></i>
//                 <input type="password" placeholder="Password" />
//             </div>

//             <input type="button" class="btn" value="Sign in" />
//         </div>
//     )

//     export default New
// }
