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
            <div>
                <p></p>
                <p></p>
                <Card >
                    <Typography color="textSecondary" gutterBottom>
                        Descripcion= {this.props.res.description}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Nombre= {this.props.res.name}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        email= {this.props.res.email}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        estado= {this.props.res.status}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        DueDate= {this.props.res.dueDate.toString()}
                    </Typography>
                </Card>
                <p></p>
                <p></p>
            </div>
        );
    }
}