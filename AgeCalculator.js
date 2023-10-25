import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AgeCalculator.css'; // Import your CSS file for styling

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: null,
      age: null,
    };
  }

  handleDateChange = (date) => {
    this.setState({
      birthDate: date,
    });
  };

  calculateAge = () => {
    if (this.state.birthDate) {
      const birthYear = this.state.birthDate.getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;
      this.setState({ age });
    }
  };

  render() {
    return (
      <div className="age-calculator-container">
        <h1 className="large-text">AGE CALCULATOR</h1>
        <p className="small-text">Enter your birth date</p>
        <DatePicker
          selected={this.state.birthDate}
          onChange={this.handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="date-picker"
        />
        <button onClick={this.calculateAge} className="confirm-button">
          Confirm Age
        </button>
        {this.state.age && (
          <p className="result-text">
            You are <span className="bold">{this.state.age}</span> years old
          </p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
