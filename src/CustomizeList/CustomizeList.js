import React, { Component } from 'react';
import CustomizeSection from '../CustomizeSection/CustomizeSection';

class CustomizeList extends Component {

    render() {         
        const { selected } = this.props;
        return (
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomizeSection 
              selected={selected}
              updateFeature={this.props.updateFeature}
              features={this.props.features}/>
          </form>
        )
    }
}

export default CustomizeList;
