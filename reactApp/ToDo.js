import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

class ToDo extends React.Component{
  render(){
    return(
      <li>
        <button onClick={() => this.props.removeItem(this.props.task)}> X </button>
        {this.props.task}
      </li>
    )
  }
}

export default ToDo
