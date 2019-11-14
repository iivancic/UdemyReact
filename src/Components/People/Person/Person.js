import React, { Component } from 'react'
// import styled from 'styled-components';
// import './Person.css';
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor (props) {
    super()
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount () {
    // this.inputElement.focus();
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }

  render () {
    console.log('[Person.js] rendering...')
    return (
      // <Auxiliary className={classes.Person}>
      // Fragment- build in Auxiliary component
      <Auxiliary>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please login.</p>
        )}
        
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          // ref={(inputEl) => {this.inputElement = inputEl}}
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

// export default Person;
export default withClass(Person, classes.Person)
