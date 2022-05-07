 
 
import React from 'react';
import './App.css';
import { Statistics } from './components/Statistics/Statistics';
import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions';
import {Notification} from './components/Notification/Notification';

class App extends React.Component {
  constructor() {
    super();
   
    this.state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

}

hendleClickGood = () => {
  this.setState(() => ({
    good: this.state.good + 1,
    
  }))
}

hendleClickNeutral = () => {
  this.setState(() => ({
    neutral: this.state.neutral + 1,
    
  }))
}

hendleClickBad = () => {
  this.setState(() => ({
    bad: this.state.bad + 1,
    
  }))
}

countTotalFeedback = () => {
  
  return this.state.good + this.state.neutral +  this.state.bad;
  
}

countPositiveFeedbackPercentage = () => {
  return  Math.ceil((this.state.good  / this.countTotalFeedback()) * 100 )
}

  render() { 
    
  return (
    <div className="App">
       <h1>Please leave feedback</h1>
       <FeedbackOptions hendleClickGood={this.hendleClickGood} 
                        hendleClickNeutral={this.hendleClickNeutral}
                        hendleClickBad={this.hendleClickBad}
       />
       {/* <button type="button" onClick={this.hendleClickGood} >Good</button>
       <button type="button" onClick={this.hendleClickNeutral}>Neutral</button>
       <button type="button" onClick={this.hendleClickBad}>Bad</button> */}
       <div>
         <h2>Statistics</h2>
         {  (this.state.good || this.state.neutral || this.state.bad) ? 
            <Statistics
             good={this.state.good} 
             neutral={this.state.neutral} 
             bad={this.state.bad} 
               total={ this.countTotalFeedback()}
               positivePercentage={this.countPositiveFeedbackPercentage()}
             />
        //  <div>           
        //    <span>Good: {this.state.good}</span>
        //    <span>Neutral: {this.state.neutral}</span>
        //    <span>Bad: {this.state.bad}</span>
        //    <span>Total: { this.countTotalFeedback() }</span>
        //    <span>Posivive feedback: {this.countPositiveFeedbackPercentage()}%</span>
        //    </div>
           :  <Notification message="No feedback given"/>}
         
       </div>
    </div>
    
  );
}
}

export default App;
