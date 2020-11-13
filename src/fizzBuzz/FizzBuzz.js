import React from 'react';
import {
  getNumbers,
  isBuzzy,
  isFizzBuzz,
  isFizzy,
  isLucky,
  isRangeInvalid,
} from './helpers'

export default class FizzBuzz extends React.Component {
  state = {
    endNum: 20,
    startNum: 1,
  };

  handleStartChange = (e) => {
    const val = e.target.value;

    if (val === "") {
      this.setState({
        startNum: 0
      });
    } else {
      this.setState({
        startNum: parseInt(val)
      });
    };
  };

  handleEndChange = (e) => {
    const val = e.target.value;

    if (val === "") {
      this.setState({
        endNum: 0
      });
    } else {
      this.setState({
        endNum: parseInt(val)
      });
    };
  }

  render() {
    const getFizzBuzz = () => {
      const { endNum, startNum } = this.state;
      const nums = getNumbers(startNum, endNum);

      return nums.map((n) => {
        if (isLucky(n)) {
          return 'lucky';
        } else if (isFizzBuzz(n)) {
          return 'fizzbuzz';
        } else if (isFizzy(n)) {
          return 'fizz';
        } else if (isBuzzy(n)) {
          return 'buzz';
        } else {
          return `${n}`;
        }
      });
    };

    const renderFizzBuzz = () => {
      const { endNum, startNum } = this.state;
      if (isRangeInvalid(startNum, endNum)) {
        return 'End number must be greater than or equal to start number!';
      };

      return getFizzBuzz().join('  ');
    }

    const getReport = () => {
      const { endNum, startNum } = this.state;

      if (isRangeInvalid(startNum, endNum)) {
        return;
      }

      const report = {
        fizz: 0,
        buzz: 0,
        fizzbuzz: 0,
        lucky: 0,
        integer: 0,
      };

      getFizzBuzz().forEach(el => {
        if (el === 'fizz') {
          report.fizz += 1;
        } else if (el === 'buzz') {
          report.buzz += 1;
        } else if (el === 'fizzbuzz') {
          report.fizzbuzz += 1;
        } else if (el === 'lucky') {
          report.lucky += 1;
        } else {
          report.integer += 1;
        }
      });

      return report;
    }

    const renderReport = () => {
      const renderData = [];
      const report = getReport();

      for (const key in report) {
        renderData.push(<div key={key}>{key}: {report[key]}</div>);
      }

      return renderData;
    }

    return (
      <div>
        <label htmlFor="startNum">Start Number: </label>
        <input type="number" onChange={this.handleStartChange} placeholder={this.state.startNum} /><br/>
        <label htmlFor="endNum" value={this.state.endNum}>End Number: </label>
        <input type="number" onChange={this.handleEndChange} placeholder={this.state.endNum} /><br/>
        <div>
          { renderFizzBuzz() }
        </div><br/>
        <div>
          { renderReport() }
        </div>
      </div>
    )
  }
}