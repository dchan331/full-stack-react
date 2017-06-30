import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import ToDo from './ToDo.js'
import InputLine from './InputLine.js'


class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <ul>
        {this.props.data.map((task) => (
          <ToDo key={uuid()} removeItem={this.props.removeItem} task={task}/>
        )
      )}
    </ul>
  )
  }
}

export default ToDoList
