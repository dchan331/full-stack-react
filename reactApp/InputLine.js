import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';


class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({value: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.value)
    this.props.addItem(this.state.value)
    this.setState({value: ''})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder=" What you gotta do" onChange={this.handleChange} value={this.state.value}/>
          <input type="submit" value="Add Task"/>

        </form>
      </div>
    )
  }
}

export default InputLine
