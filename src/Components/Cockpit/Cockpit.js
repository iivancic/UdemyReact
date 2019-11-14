import React, { useEffect, useRef} from 'react'
import Validation from '../Validation/Validation'
import classes from './Cockpit.css'
import Char from '../CharComponents/Char'
import AuthContext from '../../context/auth-context'

const Cockpit = props => {
  const toggleBtnRef = useRef(null)

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    toggleBtnRef.current.click()
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []) // [] just once

  /*
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');

      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    }); */
  const assignedClasses = []
  let btnClass = ''

  if (props.showPeople) {
    btnClass = classes.Red
  }

  if (props.peopleLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.peopleLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  const charList = props.input.split('').map((ch, index) => {
    return (
      <Char character={ch} key={index} clicked={() => props.deleteKey(index)} />
    )
  })

  return (
    <div className={classes.Cockpit}>
      <h1> {props.title}</h1>
      <p className={assignedClasses.join(' ')}> This is really working!</p>
      <Validation inputLength={props.inputLength} />
      <div>
        <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
          Toggle People
        </button>
      </div>
      <div>{charList}</div>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(Cockpit)
