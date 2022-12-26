import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const key = e.target.textContent;
    console.log(key);
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };
  // countTotalFeedback()

  // countPositiveFeedbackPercentage()

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={'Statistic'}>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
