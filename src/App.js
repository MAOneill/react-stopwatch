import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ElapsedTime from './ElapsedTime';
import Start from './Start';
import Stop from './Stop';
import Reset from './Reset';
import ClockSecondHand from './ClockSecondHand';
import ClockMinuteHand from './ClockMinuteHand';
import ClockHourHand from './ClockHourHand';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      totalElapsedTime:0,
      startTime:0,
      stopTime:0,
      sessionElapsedTime:0,
      stopWatchOn:false,
      hours:0,
      minutes:0,
      seconds:0
    }
  }
  render() {

    const secDeg = 90;
    const styles = { 
        transform: `rotate(${secDeg}deg)` 
    };

    return (
      <div className="App">
      <header>


      <div className="clock">
        <div className="clockback">
        <ClockHourHand hours={this.state.hours}/>
        <ClockMinuteHand minutes={this.state.minutes}/>
        <ClockSecondHand seconds={this.state.seconds}/>
        </div>
        </div>
        </header>
        <header className="App-header">

    
         
<ElapsedTime sessionElapsedTime={this.state.sessionElapsedTime} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
<Start handler={this._startButton}/>
<Stop handler={this._stopButton}/>
<Reset handler={this._resetButton} />


        </header>
      </div>
    );
  }
  //this runs as soon as App is loaded, once
  componentDidMount() {
     this.interval = setInterval( () => {
       let totalSeconds = this.state.stopWatchOn ? this.state.totalElapsedTime + 1 - this.state.startTime : this.state.sessionElapsedTime;
       let hours = parseInt(totalSeconds / 3600);
       let minutes = parseInt((totalSeconds-(hours*3600)) / 60);
       let seconds = parseInt((totalSeconds-(hours*3600)-(minutes*60)));

       this.setState({
         totalElapsedTime: this.state.totalElapsedTime + 1,
         sessionElapsedTime: totalSeconds,
         hours:hours,
         minutes:minutes,
         seconds:seconds
       });
      } , 1000) 
  }

  //i added this just to keep the memory clean...but we don't ever unmount this...
componentWillUnmount() {
  clearInterval(this.interval);
}
_startButton = () => {
  this.setState({
    // totalElapsedTime:0,
    //when I press start again, it resets...need to fix that.
    //startTime: this.set.sessionElapsedTime || this.state.totalElapsedTime...but needs more
      startTime:this.state.totalElapsedTime,
      sessionElapsedTime:0,
      stopWatchOn:true,
      hours:0,
      minutes:0,
      seconds:0
  })
}
_stopButton = () => {
  this.setState({
    startTime:0,
    // sessionElapsedTime:0,
    stopWatchOn:false
  })
}
_resetButton =() => {
  this.setState({
    startTime:0,
    sessionElapsedTime:0,
    stopWatchOn:false,
    hours:0,
    minutes:0,
    seconds:0

  })
}

}

export default App;
