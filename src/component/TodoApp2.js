import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class TodoApp2 extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (            
            <Card >
                <Typography color="textSecondary" gutterBottom>
                    Text= {this.props.res.text} 
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    Priority= {this.props.res.priority} 
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    DueDate= {this.props.res.dueDate.toString()}
                </Typography>
                
            </Card>               
        );
    }
}