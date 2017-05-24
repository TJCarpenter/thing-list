import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'

class App extends Component {
  constructor () {
    super()
    this.id = 0
    this.state = {
      things: {}
    }
    this.addThing = this.addThing.bind(this)

  }

  addThing(ev) {
    ev.preventDefault()
    const things = {...this.state.things}
    var id = this.id
    things[id] = {id:id, name:"Enter Thing"}
    this.id++
    this.setState({things})
  }


  render() {
    return (
      <div className="App">
        <Header />
        <AddThingButton addThing={this.addThing}/>
        <ThingList things={this.state.things} addThing={this.addThing} autoFocus = { true } />
      </div>
    );
  }
}

export default App;
