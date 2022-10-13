import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = e => {
    const targetElementContent = e.target.textContent;

    this.setState(() => ({
      [targetElementContent]: this.state[targetElementContent] + 1,
    }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const {
      state,
      updateState,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;

    return (
      <Wrapper className="App">
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={state}
            onLeaveFeedback={updateState}
            type={'button'}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </Wrapper>
    );
  }
}
