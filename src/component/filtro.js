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

class filtro extends React.Component {
    constructor(items1) {
        super(items1);
        this.state = { items: [],  name: '', status: '', dueDate: new Date('2014-08-18T21:11:54') };
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.setState.items=items1;
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
        return (
            <div>
                <h2>Lista de tarjetas</h2>

                {/**
            <TodoList items={this.state.items} />        
             */}


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
                            type="text"
                            label="name"
                            id="name"
                            value={this.state.name}
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

                        <Container>
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
        this.setState({ name: document.getElementById('name').value });        
        this.setState({ status: document.getElementById('status').value });
      }
    
      handleDate(e) {
        this.setState({ dueDate: e });
      }
    
}
export default filtro;