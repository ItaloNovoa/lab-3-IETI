import React from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import image1 from "./imagenes/1.png"

export class Imagen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount() {
        this.getImage();
    }

    getImage(){        
        let that=this;
        axios.get("https://taskplannerback.herokuapp.com/api/files/"+localStorage.getItem("mailLogged")).then(function (response) {
            that.setState({items: response.data});
            alert(JSON.stringify(that.state));
        }).catch(function (error) {
                console.log(error);
        });        
    }
    render() {        
        return (
            <div >
                <Box display="flex" justifyContent="center" m={0} p={0}>
                    <td>{this.state.items ? <img src={this.state.items} /> : <img src={image1} width='70%' height='auto' />}</td>         
                </Box>
            </div>
        );
    }
}
export default Imagen;