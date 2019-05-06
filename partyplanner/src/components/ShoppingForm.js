import React from 'react';

class ShoppingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
          item: '',
          price: '',
          
        };
      }
    render() {
        return (
            <div className='itemAdder'>
            <form onSubmit={this.props.formSubmitHandler}>
                <input
                type="text"
                placeholder="shopping item"
                value={this.props.item}
                name="item"
                onChange={this.props.inputChangeHandler}
                />
                <button type="submit">Add item</button>
            </form>
            <form onSubmit={this.props.formSubmitHandler}>
                <input
                type="text"
                placeholder="shopping price"
                value={this.props.item}
                name="item"
                onChange={this.props.inputChangeHandler}
                />
                <button type="submit">Add price</button>
            </form>
            </div>
        );
    }
};

export default ShoppingForm