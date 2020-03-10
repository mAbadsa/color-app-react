import React, { Component } from 'react';

class Palette extends Component {
    render() {
        const colorPanel = this.props.colorPanel.map(colorObj => {
            const colorArr = colorObj.colors.map((color, i) => {
                console.log(color);
               return  <span key={i} style={{backgroundColor: color.color, display: 'block', height: 20 + 'px'}}></span>
            });
            return colorArr;
        })
        return (
            <div>
                <h1>Palette</h1>
                <div>
                    {colorPanel}
                </div>
            </div>
        );
    }
}

export default Palette;