import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProductView extends Component {
    render() {
        return (
            <div>
                <h2>Product View ID # {this.props.match.params.id}</h2>
            </div>
        );
    }
}

export default ProductView;