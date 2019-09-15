import React from 'react';
import {TodoApp2} from './TodoApp2'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    } 
    
  
    render() {        

        const items = this.props.items;
        const listItems = items.map((list,i) =>
        <li id={i}><TodoApp2
          res={list}
          />
        </li>
      );
      
        return (  
            <ul>{listItems}</ul>
        );
    }
}