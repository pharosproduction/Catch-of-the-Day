import React from 'react';
import PropTypes from 'prop-types';

//--------------------------------------------------------------------------------------------------

class AddFishForm extends React.Component {

  createFish (e) {
    e.preventDefault();

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render () {
    return (
      <form className="fish-edit" onSubmit={ (e) => this.createFish(e) } ref={ (input) => this.fishForm = input }>
        <input type="text" placeholder="Fish Name" ref={ (input) => this.name = input }/>
        <input type="text" placeholder="Fish Price" ref={ (input) => this.price = input }/>
        <select ref={ (input) => this.status = input }>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea placeholder="Fish Desc" ref={ (input) => this.desc = input }/>
        <input type="text" placeholder="Fish Image" ref={ (input) => this.image = input }/>
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired
}

export default AddFishForm;
