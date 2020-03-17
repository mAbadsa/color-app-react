import React, { Component } from 'react';

class SingleColoPage extends Component {
    render() {
        const colorName = this.props.match.params.colorId;
        const { palette } = this.props;
        console.log("palette", palette.colors[500][0].name);
        const Col = palette.colors.forEach(color => {
            for(let item of color) {
                return item.name.toLoweCase() === colorName.toLoweCase();
            }
        });
        console.log(Col);
        console.log(colorName);
        return (
            <div>
                <h1>Single Color</h1>
            </div>
        );
    }
}

export default SingleColoPage;