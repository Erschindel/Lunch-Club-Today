import React from "react";

class Timer extends React.Component{
  constructor(props){
    super(props);

    let current = new Date(),
      lunchDay = [3,12,38,42];

    this.state = {
      days: (current.getDay() > lunchDay[0]) ? (7 + lunchDay[0] - current.getDay()) : (lunchDay[0] - current.getDay()),
      hours: (current.getHours() > lunchDay[1]) ? (24 + lunchDay[1] - current.getHours()) : (lunchDay[1] - current.getHours()),
      minutes: (current.getMinutes() > lunchDay[2]) ? (60 + lunchDay[2] - current.getMinutes()) : (lunchDay[2] - current.getMinutes()),
      seconds: (current.getSeconds() > lunchDay[3]) ? (60 + lunchDay[3] - current.getSeconds()) : (lunchDay[3] - current.getSeconds())
    }

  }

  componentDidMount(){
    this.interval = setInterval(this.getRemainingTime, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  getRemainingTime = () => {
    const today = new Date();
    const hooray = false,
      lunchDay = [3,12,38,42],
      secs = (today.getSeconds() > lunchDay[3]) ? (60 + lunchDay[3] - today.getSeconds()) : (lunchDay[3] - today.getSeconds()),
      //set minutes to decrement with respect to seconds, if minutes is > 0
      mins = (this.state.minutes !== -1) ? ((secs === 59) ? (this.state.minutes - 1) : (this.state.minutes)) : (59),
      //set hours to decrement with respect to minutes, if hours is > 0
      hours =  (this.state.hours !== -1) ? ((mins === 59) ? (this.state.hours - 1) : (this.state.hours)) : (24),
      day = this.state.days;

    //set hours to reflect days remaining
    // (day !== lunchDay[0]) ? ((day > lunchDay[0]) ? (hours += 24 * (lunchDay[0] + day - 7)) : (hours += 24 * (lunchDay[0] - day))) : (hooray = true)

    this.setState({
      days: day,
      hours: hours,
      minutes: mins,
      seconds: secs
    })
  }

  render(){
    //
    return(
      <div>
        <span>{this.state.hours} hours, {this.state.minutes} minutes, and {this.state.seconds} seconds until next out to lunch!</span>
      </div>
    )
  }

}

export default Timer;
