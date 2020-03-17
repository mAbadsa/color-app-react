import React, { Component } from 'react';

class SingleColorPalette extends Component {
    render() {
        const colorName = this.props.match.params.colorId;
        console.log(colorName);
        const colors = this.props.palette.colors;
        console.log(colors);
        for (let o in colors) {
            const c = colors[o].map(el => el.name === colorName)
            console.log(c);
        }
        return (
            <div>
                <h1>Single Color</h1>
            </div>
        );
    }
}

export default SingleColorPalette;