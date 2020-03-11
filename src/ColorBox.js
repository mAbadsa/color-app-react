import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        return (
            <div className="ColorBox" style={{background: this.props.background}} name={this.props.name}>
                <span>{this.props.name}</span>
                <span>More</span>
            </div>
        );
    }
}

export default ColorBox;