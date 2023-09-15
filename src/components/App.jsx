import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  }

  countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad ;
  };
    
    handlePositiveFeedback = () => {
      return  !this.state.good ? 0 : Math.round((this.state.good/this.countTotalFeedback() ) * 100)
  }
 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.handlePositiveFeedback();
   
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[ 'good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={ positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

