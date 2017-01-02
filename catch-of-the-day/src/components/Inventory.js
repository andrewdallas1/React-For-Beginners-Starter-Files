import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return(
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={this.name}
          placeholder="Fish name" onChange={(e) => this.handleChange(e, key)}/>
        <input type="text" name="price" value={this.price}
          onChange={(e) => this.handleChange(e, key)} placeholder="Fish price"/>
        <select type="text" name="status" value={this.status}
          onChange={(e) => this.handleChange(e, key)} placeholder="Fish Status">
          <option value="available">Fresh!</option>
          <option value="unavailabe">Sold Out!</option>
        </select>
        <textarea onChange={(e) => this.handleChange(e, key)}
        type="text" placeholder="Fish Desc" value={this.Desc}>
          </textarea>
        <input type="text" name="image" value={this.image}
         onChange={(e) => this.handleChange(e, key)} placeholder="Fish image"/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>

      </div>
    )
  }
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}


Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired
}

export default Inventory;

