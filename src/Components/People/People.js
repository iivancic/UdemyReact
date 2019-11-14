import React, {PureComponent} from 'react';
import Person from './Person/Person'


class People extends PureComponent {
    //static getDerivedStateFromProps(props, state) {
    //  console.log('[People.js] getDerivedStateFromProps')
    // return state;
    //}  
/*
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[People.js] shouldComponentUpdate');
            if (nextProps.people !== this.props.people){
            return true;
            } else {
                return false;
            }
       //return true;
    }

    getSnapshotBeforeUpdate(prevProps, nextState){
        console.log('[People.js] getSnamshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('[People.js] componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('[person.js] componentWillUnmount')
    }
    */
    render(){
        console.log('[People.js] rendering...');
        return this.props.people.map((person, index) => {
            return (
                <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age}
                    key={index} 
                    changed={(event)=>this.props.changed(event, person.id)} 
                    isAuth = {this.props.isAuthenticated}
                />
            );
        });
    }
}

export default People;