import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";
import { useState } from "react";



const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  
const [feedback, setFeedback]= useState(initialFeedback)

  const onLeaveFeedback = feedbackType => {
    setFeedback(prevFeedback => ({ ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 }));
  }

  const countTotalFeedback = () => {
      return feedback.good + feedback.neutral + feedback.bad ;
  };
    
    const handlePositiveFeedback = () => {
      return  !feedback.good ? 0 : Math.round((feedback.good/countTotalFeedback() ) * 100)
  }
 
 const total = countTotalFeedback();

   
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={handlePositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }


