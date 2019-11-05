import React from 'react';
import axios from 'axios';
import CardMedia from '@material-ui/core/CardMedia';

export class Imagen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render() {        
        return (
            
            <div >
                <CardMedia
                    component="img"
                        image={"https://taskplannerback.herokuapp.com/api/files/"+localStorage.getItem("mailLogged")}
                    />
            </div>
        );
    }
}
export default Imagen;