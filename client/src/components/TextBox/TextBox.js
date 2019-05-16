import React from 'react';
import './TextBox.css';

class TextBox extends React.Component {
    state = {
        input : ""
    }

    onChange = event => {
        const {value, name} = event.target
        // Getting the value and name of the input which triggered the change
    
        if (value < 200) {
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
    }

    render ()
    {
        return (
            <input
                className = 'text'
                type="text"
                name='input'
                value={this.state.value}
                onChange={this.handleChange}
            />
        )
    };
}

export { TextBox };