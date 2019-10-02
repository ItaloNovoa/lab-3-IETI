import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Button, darkColors } from 'react-floating-action-button'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { TodoList } from './TodoList'
import { Redirect } from "react-router-dom";
import Fab from '@material-ui/core/Fab';

class filtro extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], name: '', status: '', dueDate: new Date(), back:false };
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleBack = this.handleBack.bind(this);        
        this.handleSearch= this.handleSearch.bind(this);
        this.avoid=this.avoid.bind(this);
        this.lista=JSON.parse(localStorage.getItem("list"));
           
    }
    

    render() {
        const useStyles = makeStyles(theme => ({
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            },
            fab: {
                position: 'absolute',
                bottom: theme.spacing(2),
                left: theme.spacing(-5),
            },
            fab1: {
                position: 'absolute',
                bottom: theme.spacing(2),
                right: theme.spacing(5),
            },
        }));
        
        if (this.state.back) {
            return <Redirect to={{
                pathname: '/miniDrawer',
            }}
            />
        };
        return (
            <div>
                <h2>Lista de tarjetas</h2>

                
            <TodoList items={this.state.items} /> 


                <Card >
                    <h2>Datos buscar tarjetas</h2>
                    <form onSubmit={this.handleSubmit}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date"
                                label="fecha buscada"
                                format="MM/dd/yyyy"
                                value={this.state.dueDate}
                                selected={this.state.dueDate}
                                onChange={this.handleDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            required
                            type="text"
                            label="name"
                            id="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <TextField
                            required
                            type="text"
                            label="status"
                            id="status"
                            value={this.state.status}
                            onChange={this.handleChange}
                            margin="normal"
                        />

                        <Container>
                            {/**
                            <Button
                                label="status"
                                tooltip="filtrar"
                                styles={{ backgroundColor: darkColors.blue, color: darkColors.white }}
                                onClick={this.handleSearch}>
                                    <SearchIcon />
                            </Button>
                            <Button
                                label="status"
                                tooltip="volver al menu"
                                styles={{ backgroundColor: darkColors.blue, color: darkColors.white }}
                                onClick={this.handleBack}>
                                    <LeftIcon />
                            </Button>
                            <Button
                                label="status"
                                tooltip="opciones"
                                styles={{ backgroundColor: darkColors.blue, color: darkColors.white }}
                                onClick={this.avoid}>
                                    < MenuIcon />
                            </Button>
                            */}
                            <Fab tooltip="filtrar" color="primary" aria-label="add" onClick={this.handleSearch} className={useStyles.fab1}>
                              <SearchIcon />
                            </Fab>
                            <Button
                                label="status"
                                tooltip="volver al menu"
                                styles={{ backgroundColor: darkColors.blue, color: darkColors.white }}
                                onClick={this.handleBack}>
                                    <LeftIcon />
                            </Button>

                        </Container>
                    </form>
                </Card >
            </div>


        );
    }
    handleChange(e) {
        this.setState({ name: document.getElementById('name').value });
        this.setState({ status: document.getElementById('status').value });
    }

    handleDate(e) {
        this.setState({ dueDate: e });
    }
    handleBack(event){
        this.setState({ back: true });
    }
    avoid(event){
        
    }
    handleSearch(event){
        for (var i=0; i < this.lista.length; i++) {
            if(this.igualarFechas(this.lista[i].dueDate,this.state.dueDate) && this.lista[i].name===this.state.name  && this.lista[i].status===this.state.status){
                const newItem = {
                    description: this.lista[i].description,
                    name: this.lista[i].name,
                    email: this.lista[i].email,
                    status: this.lista[i].status,
                    dueDate: this.lista[i].dueDate,
                    id: Date.now()
                  }; 
                this.setState(prevState => ({
                    items: prevState.items.concat(newItem),
                    text: ''
                }));
            }else{
                alert("No hay cartas con estos valores");
            }
        }
    }

    igualarFechas(a,b){
        if(new Date(a).getDate===b.getDate){
            if(new Date(a).getMonth===b.getMonth){
                if(new Date(a).getFullYear===b.getFullYear){
                    return true;
                }
            }                
        }
        return false;
    }
}
export default filtro;