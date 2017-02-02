import React from 'react'

class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //Two main questsions. Why do you call super? Why do you declare handleClick in the constructor with a bind and then code the function as a property of React.Component? Why not define handleClick in the constructor?
  //what is the difference in objects/contexts between constructor and React.Component body


  handleClick(){
    this.setState({timesClicked: ++this.state.timesClicked})
    //object of state variables to update or a function which returns an object of state variables
    //you need to call this.state."name of state to be updated"
    //setState() takes in an object(key,value pair) of the state to update
  }

  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
  //In React, you pass the value in as {state.to.be.updated}. Since its javascript, you DO NOT need to interpolate it like you would regular html. the brackets are evaluated and then everything is rendered as a string in html
}



module.exports = DigitalClicker
