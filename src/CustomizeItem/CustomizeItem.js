import React, { Component } from 'react';
import slugify from 'slugify';

class CustomizeItem extends Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
       const { itemHash, item, selected, feature } = this.props;
       
        return (
            <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(feature)}
                  checked={item.name === selected[feature].name}
                  onChange={() => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>

        );
    }  
}

export default CustomizeItem;