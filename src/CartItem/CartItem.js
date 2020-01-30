import React, { Component } from 'react';

class CartItem extends Component {

render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      const { featureHash, feature, selectedOption } = this.props;

    return (
        <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>

    )

    }
}

export default CartItem;