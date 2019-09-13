import React from "react";

class Timer extends React.Component{
  constructor(props){
    super(props);

    let current = new Date(),
      lunchDay = [3,12,38,42],
      // setting minutes, hours, and days relative to adjusted seconds s

      s = (current.getSeconds() > lunchDay[3]) ? (60 + lunchDay[3] - current.getSeconds()) : (lunchDay[3] - current.getSeconds()),
      m = (s > lunchDay[3]) ? ((current.getMinutes() > lunchDay[2]) ? (60 + lunchDay[2] - current.getMinutes() - 1) : (lunchDay[2] - current.getMinutes()) - 1) : ((current.getMinutes() > lunchDay[2]) ? (60 + lunchDay[2] - current.getMinutes()) : (lunchDay[2] - current.getMinutes())),
      h = (m > lunchDay[2]) ? ((current.getHours() > lunchDay[1]) ? (24 + lunchDay[1] - current.getHours() - 1) : (lunchDay[1] - current.getHours()) - 1) : ((current.getHours() > lunchDay[1]) ? (24 + lunchDay[1] - current.getHours()) : (lunchDay[1] - current.getHours())),
      d = (h > lunchDay[1]) ? ((current.getDay() > lunchDay[0]) ? (7 + lunchDay[0] - current.getDay() - 1) : (lunchDay[0] - current.getDay()) - 1) : ((current.getDay() > lunchDay[0]) ? (7 + lunchDay[0] - current.getDay()) : (lunchDay[0] - current.getDay()));

    this.state = {
      days: d,
      hours: h,
      minutes: m,
      seconds: s
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
    let hooray = false,
      lunchDay = [3,12,38,42],
      secs = (today.getSeconds() > lunchDay[3]) ? (60 + lunchDay[3] - today.getSeconds()) : (lunchDay[3] - today.getSeconds()),
      //set minutes to decrement with respect to seconds, if minutes is > 0
      mins = (this.state.minutes !== -1) ? ((secs === 59) ? (this.state.minutes - 1) : (this.state.minutes)) : (59),
      //set hours to decrement with respect to minutes, if hours is > 0
      hours = (this.state.hours !== -1) ? ((mins === 59 && secs === 58) ? (this.state.hours - 1) : (this.state.hours)) : (23),
      day = (this.state.days !== -1) ? ((hours === 23 && mins === 59 && secs === 57) ? (this.state.days - 1) : (this.state.days)) : (6);


    (day === lunchDay[0] && hours < 13) ? hooray = true : hooray = false;


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
        <span>{this.state.days} days, {this.state.hours} hours, {this.state.minutes} minutes, and {this.state.seconds} seconds until next out to lunch!</span>
      </div>
    )
  }

}

export default Timer;
