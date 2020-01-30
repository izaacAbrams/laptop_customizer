import React, { Component } from 'react';
import CustomizeItem from '../CustomizeItem/CustomizeItem';
import slugify from 'slugify';

class CustomizeSection extends Component {
    render() {
        const { selected, features } = this.props;
    
        return Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
                
            return (
                <CustomizeItem 
                  featureHash={featureHash}
                  itemHash={itemHash}
                  feature={feature}
                  item={item}
                  key={itemHash}
                  selected={selected}
                  updateFeature={this.props.updateFeature}
                />
            );         
        }); 
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>            
            );      
        });
            
           

            
        
    }
}

export default CustomizeSection;

