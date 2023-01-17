import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    return (
      <section className={s.wrapper}>
        <h2 className={s.title}>Please leave feedback</h2>
        <ul className={s.btnList}>
          <li className={s.btnItem}>
            <button className={s.btn} type="button">
              Good
            </button>
          </li>
          <li className={s.btnItem}>
            <button className={s.btn} type="button">
              Neutral
            </button>
          </li>
          <li className={s.btnItem}>
            <button className={s.btn} type="button">
              Bad
            </button>
          </li>
        </ul>
        <h2 className={s.title}>Statistics</h2>
        <ul className={s.statList}>
          <li className={s.statItem}>Good: {this.state.good}</li>
          <li className={s.statItem}>Neutral: {this.state.neutral}</li>
          <li className={s.statItem}>Bad: {this.state.bad}</li>
          <li className={s.statItem}>Total: {this.countTotalFeedback()}</li>
          <li className={s.statItem}>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </li>
        </ul>
      </section>
    );
  }
}

Feedback.propTypes = {
  // bla: PropTypes.string,
};

Feedback.defaultProps = {
  // bla: 'test',
};

export default Feedback;
