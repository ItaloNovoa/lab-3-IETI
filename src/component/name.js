import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";


export class Name extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.state) {
            this.state = {
                first_name: this.props.location.state.first_name, last_name: this.props.location.state.last_name,
                email: '', birthday: '', password: '', secondPassword: '', next: false,
            }

        } else {
            this.state = { first_name: '', last_name: '', email: '', birthday: '', password: '', secondPassword: '', next: false, };
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handleBirthday = this.handleBirthday.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSecondPassword = this.handleSecondPassword.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handleFirstName(event) {
        this.setState({ first_name: event.target.value });
    };
    handleLastName(event) {
        this.setState({ last_name: event.target.value });
    };
    handleEmail(event) {
        this.setState({ email: event.target.value });
    };
    handleBirthday(event) {
        this.setState({ birthday: event.target.value });
    };
    handlePassword(event) {
        this.setState({ password: event.target.value });
    };
    handleSecondPassword(event) {
        this.setState({ secondPassword: event.target.value });
    };
    handleNext(event) {        
        event.preventDefault();
        if (this.state.first_name && this.state.last_name && this.state.password && this.state.password === this.state.secondPassword) {
            this.setState({ next: true });
        }
        else if(this.state.password === this.state.secondPassword){
            alert("Todos los datos son requeridos")
        }
        else{
            alert("La claves no son iguales")
        }
    }
    render() {
        const divStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        };
        if (this.state.next) {
            return <Redirect to={{
                pathname: '/miniDrawer',
                state: { first_name: this.state.first_name, last_name: this.state.last_name }
            }}
            />
        };

        return (
            <div className="color_fondo">
                <Link to="/">Back</Link>
                <h1>Informacion de registro</h1>
                <div style={divStyle}>
                    <form style={divStyle} >
                        <label>
                            FIRST NAME
                            <input type="text" name="first_name" value={this.state.first_name}
                                onChange={this.handleFirstName}
                            />
                        </label>
                        <label>
                            LAST NAME
                    <input type="text" name="last_name" value={this.state.last_name}
                                onChange={this.handleLastName} />
                        </label>
                        <label>
                            EMAIL ADDRESS
                            <input type="email" name="email" value={this.state.email}
                                onChange={this.handleEmail}
                            />
                        </label>
                        <label>
                            BIRTHDAY
                            <input type="date" name="birthday" value={this.state.birthday}
                                onChange={this.handleBirthday}
                            />
                        </label>

                        <label>
                            PASSWORD
                            <input type="password" name="password" value={this.state.password}
                                onChange={this.handlePassword} />
                        </label>
                        <label>
                            REPEAT PASSWORD
                            <input type="password" name="secondPassword" value={this.state.secondPassword}
                                onChange={this.handleSecondPassword} />
                        </label>
                        <button  onClick={this.handleNext} >Next</button>
                    </form>
                </div>
            </div>
        )
    }
}