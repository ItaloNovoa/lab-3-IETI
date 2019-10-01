import React from 'react';
import { TodoList } from './TodoList'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Button, darkColors } from 'react-floating-action-button'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import filtro from './filtro';
import { Redirect } from "react-router-dom";

class TodoApp extends React.Component {



  constructor(props) {
    super(props);
    this.state = { items: [], description: '', name: '', email: '', status: '', filtrob: false,dueDate:  new Date('2014-08-18T21:11:54') };
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
    
    this.checkdata();
  }

  checkdata() {
    alert(localStorage.getItem("list"));
    localStorage.setItem("list", JSON.stringify(this.state.items));    
    alert(this.state.items.length);
  }
  handleSearch(event){
    //this.state.items.map((item) => alert(item.description));
    this.setState({ filtrob: true });
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
      if (this.state.filtrob) {
      return <Redirect to={{
        pathname: '/filtro'
      }}    />
    };
      return (
        <div>
          <h2>Lista de tarjetas</h2> 
              
          <TodoList items={this.state.items} />        
          
          <Card > 
          <h2>Datos para nueva tarjeta</h2>      
          <form onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              label="Descripcion"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              type="text"
              label="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              type="text"
              label="mail"
              id="mail"
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              type="text"
              label="status"
              id="status"
              value={this.state.status}
              onChange={this.handleChange}
              margin="normal"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
  
              <KeyboardDatePicker
                margin="normal"
                id="date"
                label="Date"
                format="MM/dd/yyyy"
                value={this.state.dueDate}
                selected={this.state.dueDate}
                onChange={this.handleDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <Container>
            <Fab tooltip="Fitrar Notas" color="primary" aria-label="add" onClick={this.handleSearch} className={useStyles.fab1}>
                              <SearchIcon />
                </Fab> 
              <Button
                label="status"
                tooltip="add Card"
                styles={{ backgroundColor: darkColors.blue, color: darkColors.white }}
                onClick={this.state.items.length + 1}><font size="8">+</font></Button>
                
            </Container>
          </form>
        </Card >
        </div>
  
    );
  
    
        
  }
 

  handleChange(e) {
    this.setState({ description: document.getElementById('description').value })
    this.setState({ name: document.getElementById('name').value });;
    this.setState({ email: document.getElementById('mail').value });;
    this.setState({ status: document.getElementById('status').value });
  }

  handleDate(e) {
    this.setState({ dueDate: e });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.description.length==0) {
      this.checkdata();
    }
    const newItem = {
      description: this.state.description,
      name: this.state.name,
      email: this.state.email,
      status: this.state.status,
      dueDate: this.state.dueDate,
      id: Date.now()
    };
    //alert(newItem.description+","+newItem.name+","+newItem.email+","+newItem.status+","+newItem.dueDate+" ");
    alert(JSON.stringify(newItem));
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
    this.checkdata();    
  }
}
export default TodoApp;