import React from 'react'
// import photo from "./photo.jpg"
import '../Components/Data'
import Component from '../Components/Component'
import data from '../Components/Data'



function TeaCoffee() {
  const component = data.map(item => {
    return (
      <Component
        photo={item.photo}
        name={item.name}
        mrp={item.mrp}
      ></Component>
    )
  })

  return(
    [component]
  )
}




export default TeaCoffee

