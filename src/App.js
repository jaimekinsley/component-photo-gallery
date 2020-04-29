import React, { Component } from 'react'
import creatureData from './data.js'
import ImageItem from './ImageItem.js'


// const creature = {
//   horns: 2, 
//   title: 'monster',
//   url: '',
//   description: 'scary'
// }  

        {/* <ImageItem images = {creature}/> */}


export default class App extends Component {

  
render() {
    return (
      <div>

<section className="options">
            {/* lets move this to another component? */}
            <select className="creature-type-filter" onChange={this.handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              <option value="Narwhal">Narwhal</option>
              <option value="Rhino">Rhino</option>
              <option value="Unicorn">Unicorn</option>
              <option value="Unilego">Unilego</option>
              <option value="Triceratops">Triceratops</option>
              <option value="Markhor">Markhor</option>
              <option value="Mouflon">Mouflon</option>
              <option value="Addax">Addax</option>
              <option value="Chameleon">Chameleon</option>
              <option value="Lizard">Lizard</option>
              <option value="Dragon">Dragon</option>



            </select>
          </section>

        <section className="list-section">
            <ul className="creatures">
              {
                creatureData
                  .filter(creature => {
                    // if there is nothing selected, show ALL CREATURES
                    if (!this.state.selected) return true;
            
                    // otherwise only show the creature if the creature keyword is the same as the selected creature keyword
                    return creature.type === this.state.selected;
                  })
                  .map(animal => {
                  console.log(animal)
                  return <ImageItem creature={animal} />
                  })        
            }
            </ul>
          </section>
      </div>
    )
  }
}
