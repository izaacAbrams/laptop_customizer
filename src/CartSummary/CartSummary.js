import React, { Component } from 'react';

class CartSummary extends Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        const { summary, total } = this.props; 
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        )
    }
}

export default CartSummary;
