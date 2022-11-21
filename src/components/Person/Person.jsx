import React, { Component } from "react";
// import React from 'react'


export class Person extends Component {
    render() {
        return (
            <span>
                {this.props.name} {this.props.surname} - {this.props.age} <br />
            </span>
        );
    }
}

// const Person = (props) => {
//     console.log (props.Person)
//     return (

//         <h1> Bienvenid@  {props.name} {props.surname} - {props.age} <br /></h1>
//     )
// }


export default Person;