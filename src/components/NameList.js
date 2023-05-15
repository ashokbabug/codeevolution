import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Ashok','Durga','Dinesh','Kesav']
    const persons = [
      {
        id:1,
        name:'Ashok',
        age:23,
        skill:'Python'
      },
      {
        id:2,
        name:'Dinesh',
        age:23,
        skill:'Java'
      }

    ]
    const PersonComponents = persons.map(person=> <Person key={person.id} person={person}></Person>)
    //key prop is a special kind of prop and they are not accessable in child component
    // If you have so many components as list use as PersonComponents
  return (
    <div>
      {PersonComponents}
        {
          names.map((name,index)=><h3 key={index}>{index} {name}</h3>)
        }
    </div>

  )
}

export default NameList
