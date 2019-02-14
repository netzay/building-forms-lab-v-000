// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }
 handleSubmit = (event) => {
  event.preventDefault();
  this.props.addBand(this.state);
  this.setState({
    name: ''
  })
 }

 handleChange = (event) => {
  this.setState({
      name: event.target.value
    })
 } 
  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event) }> 
        <p>
          <label>add band</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
        </p>
        <input type="submit" />
        </form>
      </div>
    )
  }
}


export default (BandInput)