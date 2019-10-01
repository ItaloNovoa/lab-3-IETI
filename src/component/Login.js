import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { Redirect } from "react-router-dom";
import image1 from "./imagenes/1.png"

export class Login extends React.Component{
    checkdata() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value

        if (email !== "" && password !== "" ) {
            localStorage.setItem("isLoggedin", true);
            localStorage.setItem("mailLogged", email);
            localStorage.setItem("passwordLogged", password);
            this.setState({ Loggin: true });
        }
    }
    constructor(props) {

        super(props);
        this.state = { createAcount: '', Loggin: '' }
        this.handleLoggin = this.handleLoggin.bind(this);
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
    }
    handleLoggin(event) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value
        if (email !=="" && password!=="" && localStorage.getItem("mailLogged")===email && localStorage.getItem("passwordLogged")===password){
            this.checkdata();
            this.setState({ Loggin: true });
        }else if(email ==="" && password===""){
            alert("El campo de email o contraseña esta vacio");
        }else{
            alert("usuario o correo incorrecto")
        }
        
    }
    handleCreateAcount(event) {
        this.setState({ createAcount: true });
    }
    log() {        
        if(localStorage.isLoggedin==="true"){            
            window.location.replace("/miniDrawer");
        }        
    }
    render(){
        this.log()
        if (this.state.createAcount) {
            return <Redirect to={{
                pathname: '/name'
            }}
            />
        }
        if (this.state.Loggin) {
            return <Redirect to={{
                pathname: '/miniDrawer'
            }}
            />
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    
                    <Paper className="paper">
                        <h1>TaskPlanner</h1>
                            <img src={image1}/>
                        
                        <Typography variant="headline">Login</Typography>
                        <form className="form">
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"                                    
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleLoggin}
                            >
                                Sign in
                            </Button>
                            <Button
                                className="ButtonLindo"
                                type="submit"
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleCreateAcount}
                            >
                               Create Account
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}
