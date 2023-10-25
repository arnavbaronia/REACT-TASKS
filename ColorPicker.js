import React, { Component } from 'react';
import './ColorPicker.css'; // Import your CSS file for styling

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    return (
      <div className="color-picker-container">
        <button onClick={this.toggleColorList} className="color-picker-button">
          Pick a color
        </button>

        {isOpen && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            )}
          </div>
        )}

        {selectedColor && (
          <div className="selected-color-box">
            <p className="selected-color-text">Selected Color:</p>
            <div
              className="selected-color"
              style={{ backgroundColor: selectedColor }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
