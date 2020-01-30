import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';

class Cart extends Component {
    render() {
     
        const { selected } = this.props;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
    
            return (
            <CartItem 
              featureHash={featureHash}
              feature={feature}
              key={featureHash}
              selectedOption={selectedOption}
            />
            );
            
          });    
          const total = Object.keys(selected).reduce(
        (acc, curr) => acc + selected[curr].cost,
        0
      );
          return (
        <CartSummary 
          summary={summary}
          total={total}
          
        />
          )
    }
}

export default Cart;
