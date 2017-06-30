import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import ToDo from './ToDo.js'
import ToDoList from './ToDoList.js'

import InputLine from './InputLine.js'


class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : ["mow the lawn", "shower", "soccer", "go back to Canada"]
    }
    this.removeItem = this.removeItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  removeItem(item){
    var newData = this.state.data.filter((dataItem) =>(dataItem !== item))
    this.setState({data: newData})
  }

  addItem(item){
    var newData = this.state.data.concat(item)
    console.log(newData)
    this.setState({data: newData})
  }

  render(){
    return(
      <div>
        <InputLine addItem={this.addItem}/>
        <ToDoList data={this.state.data} removeItem={this.removeItem}/>
      </div>
  )
}
}

export default ToDoApp
