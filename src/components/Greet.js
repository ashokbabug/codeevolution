import React from 'react'
// function Greet() {
//     return <h1>Hello Ashok</h1>
// }
//dont return multiple elements at once if there are multiple wrap it in a div
//If you want to load the html dynamically use the pros.children
const Greet = (props) => {
    //Destructuring
    const {name,heroName} = props  //in class component use this.props
    return (
        <div>
            <h1>Hello {name} - {heroName}</h1>
            {props.children}

        </div>
        
        
    )
}
export default Greet;