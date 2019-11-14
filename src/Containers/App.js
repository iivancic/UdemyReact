import React, { Component } from 'react'
import classes from '../Containers/App.css'
import People from '../Components/People/People'
import Cockpit from '../Components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Auxiliary from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'
//import authContext from '../context/auth-context'

// import { classes } from 'istanbul-lib-coverage';

/*
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' :'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
    background-color:  ${props => props.alt ? 'salmon' :'lightgreen'};
    color: black;
    }
`
*/

class App extends Component {
  constructor (props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    people: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Steph', age: 100 }
    ],
    otherState: 'some other value',
    showPeople: false,
    inputLength: 0,
    input: '',
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }
  /*
  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount () {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate')
  }
*/
  switchNameHandler = newName => {
    this.setState({
      people: [
        { id: '1', name: newName, age: 28 },
        { id: '2', name: 'Manuel', age: 29 },
        { id: '3', name: 'Shaka', age: 100 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id
    }) // returns first element from state.people whose id equals given id

    const person = { ...this.state.people[personIndex] } // distrubuting all the properties o the object we are fetching onto a new object- cloning an object

    person.name = event.target.value // setting a persons name to targeted value (to a copied object)

    const people = [...this.state.people] // copying all elements from state.people to a new object people

    people[personIndex] = person // rewriting the object on personIndex place in people

    this.setState((prevState, props) => {
      return {
        people: people,
        changeCounter: prevState.changeCounter + 1
      }
    }) // updating state
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople

    this.setState({ showPeople: !doesShow })
  }

  deletePersonHandler = personIndex => {
    const people = [...this.state.people] // creates a new array with the spread operator

    people.splice(personIndex, 1) // deletes 1 element on the personIndex index

    this.setState({ people: people })
  }

  deleteCharHandler = index => {
    const text = this.state.input.split('')

    text.splice(index, 1)

    const newText = text.join('')

    this.setState({ input: newText })
  }

  lengthOfInput = event => {
    let inputLength = { ...this.state.inputLength }

    inputLength = event.target.value.length

    this.setState({ inputLength: inputLength })

    this.setState({ input: event.target.value })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render () {
    console.log('[App.js] render')

    let people = null

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      )
    }

    let input = (
      <div className='input'>
        <input type='text' onChange={this.lengthOfInput} />
        <p>Length of the given input is equal to: {this.state.inputLength}</p>
      </div>
    )

    return (
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false })
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >

         {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPeople={this.state.showPeople}
              peopleLength={this.state.people.length}
              inputLength={this.state.inputLength}
              input={this.state.input}
              clicked={this.togglePeopleHandler}
              deleteKey={this.deleteCharHandler}
            />
          ) : null}
          {people}
          {input}
        </AuthContext.Provider>
      </Auxiliary>
    )
  }
}
export default withClass(App, classes.App)
