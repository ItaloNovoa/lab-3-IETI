import React from 'react';
import { TodoList } from './TodoList'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Button, darkColors } from 'react-floating-action-button'
import AddIcon from '@material-ui/icons/Add';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class TodoApp extends React.Component {


  constructor(props) {
    super(props);
    this.state = { items: [], description: '', name: '', email: '', status: '', dueDate:  new Date('2014-08-18T21:11:54') };
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {

    return (
      <Card >
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Ingresa los datos
          </label>
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
            <Button
              label="status"
              tooltip="add Card"
              styles={{ backgroundColor: darkColors.green, color: darkColors.orange }}
              iconStyles={{ AddIcon }}
              onClick={this.state.items.length + 1}
            />
          </Container>
        </form>
      </Card >
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
    if (!this.state.description.length) {
      return;
    }
    const newItem = {
      description: this.state.description,
      name: this.state.name,
      email: this.state.email,
      status: this.state.status,
      dueDate: this.state.dueDate,
      id: Date.now()

    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}
export default TodoApp;