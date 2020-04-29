import React, { Component } from 'react'
import creatureData from './data.js'
import ImageItem from './ImageItem.js'




export default class App extends Component {
  state = { selected: null };
  
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ selected: e.target.value });
  };
  
render() {
  
        
 

  return (
      <div>

      <section className="options">
            {/* lets move this to another component? */}

            <select className="creature-type-filter" onChange={this.handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              <option value="narwhal">Narwhal</option>
              <option value="rhino">Rhino</option>
              <option value="unicorn">Unicorn</option>
              <option value="unilego">Unilego</option>
              <option value="triceratops">Triceratops</option>
              <option value="markhor">Markhor</option>
              <option value="mouflon">Mouflon</option>
              <option value="addax">Addax</option>
              <option value="chameleon">Chameleon</option>
              <option value="lizard">Lizard</option>
              <option value="dragon">Dragon</option>
            </select>

          </section>

        
            <ul className="creatures">
            
           { creatureData
              .filter(creature => {
                //   // if there is nothing selected, show ALL CREATURES
                  if (!this.state.selected) return true;
          
                //   // otherwise only show the creature if the creature keyword is the same as the selected creature keyword
                  return creature.keyword === this.state.selected;
                })
           .map(animal => {
             console.log(animal);
             
    return <ImageItem creature={animal}/>
    })}
           </ul>
      </div>
    )
  }
}
