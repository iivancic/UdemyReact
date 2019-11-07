import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {

  state = {
    people: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 100}
    ],
    otherState: 'some other value',
    showPeople: false
  };

    switchNameHandler = (newName) => {
      this.setState({
        people: [
        { name: newName, age: 28 },
        { name: 'Manuel', age: 29 },
        { name: 'Shaka', age: 100}
      ]
      })
    }

  nameChangedHandler = (event) => {
    this.setState({
      people:[
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Shaka', age: 100}
    ]
    })
  }

  togglePeopleHandler = () => {  
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
    
  }

  deletePersonHandler = (personIndex) => {
    const people = this.state.people;
    people.splice(personIndex, 1);
    this.setState({people: people})
  }

render (){

  let people = null;

  if (this.state.showPeople){
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age ={person.age}/>
          })}
        </div> 
      );
  }
    return (
      <div className="App">
        <h1> I'm a React App</h1>      
        <p> This is really working!</p> 
       
        <button onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
        
      </div>
    );
    //return React.createElement('div', {className: 'divClass'}, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  };
}
export default App;
