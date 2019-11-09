import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {

  state = {
    people: [
      {id:"1", name: 'Max', age: 28 },
      {id:"2", name: 'Manu', age: 29 },
      {id:"3", name: 'Steph', age: 100}
    ],
    otherState: 'some other value',
    showPeople: false,
    inputLength: 0
  };


    switchNameHandler = (newName) => {
      this.setState({
        people: [
        {id:"1", name: newName, age: 28 },
        {id:"2", name: 'Manuel', age: 29 },
        {id:"3", name: 'Shaka', age: 100}
      ]
      })
    }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.people.findIndex(p => { return p.id===id; }); // returns first element from state.people whose id equals given id

    const person = { ...this.state.people[personIndex] }; //distrubuting all the properties o the object we are fetching onto a new object- cloning an object

    person.name = event.target.value; // setting a persons name to targeted value (to a copied object)

    const people = [...this.state.people]; //copying all elements from state.people to a new object people

    people[personIndex] = person;  //rewriting the object on personIndex place in people

    this.setState({ people: people}); //updating state
  }

  togglePeopleHandler = () => {  
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
    
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people]   //creates a new array with the spread operator
    people.splice(personIndex, 1); //deletes 1 element on the personIndex index
    this.setState({people: people})
  }


  lengthOfInput = (event) => {
    let inputLength = {...this.state.inputLength}
    inputLength = event.target.value.length;
    this.setState({inputLength: inputLength})
    console.log(inputLength)
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
              age={person.age}
              key={index} 
              changed={(event)=>this.nameChangedHandler(event, person.id)}  
              />
          })}
        </div> 
      );
  }

  let input = (
      <div className="input">
        <input type="text" onChange={this.lengthOfInput}/>
        <p>Length of the given input is equal to: {this.state.inputLength}</p>
      </div>
  )
  
    return (
      <div className="App">

        {input}
        <h1> I'm a React App</h1>      
        <p> This is really working!</p>  
        <button onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
        
      </div>
    );
  };
}
export default App;
