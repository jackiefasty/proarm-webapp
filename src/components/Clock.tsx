import React from 'react';
import './Clock.css';
import Music from './Music'

type S = {
  hours: string;
  minutes: string;
  date: string;
}


class Clock extends React.Component<{}, S> {

  private readonly days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  private readonly months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  private interval: NodeJS.Timeout | null = null;
  
  constructor(props: {}) {
    super(props);
    this.state = this.getState();
  }

  getState(): S {
    const d = new Date();
    return {
      hours: `${d.getHours()}`,
      minutes: `${d.getMinutes()}`.padStart(2, '0'),
      date: `${this.days[d.getDay()]}, ${this.months[d.getMonth()]} ${d.getDate()}`
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(this.getState());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval)
      clearInterval(this.interval);
  }

  render() {
    return (
      <div className='clock'>
        <div className='info-wrapper'>
          <p className="info date">{ this.state.date }</p>
          <p className="info weather">🌥️ 8° C</p>
        </div>
        <div className='time-wrapper'>
          <p className="time hours">{ this.state.hours }</p>
          <p className="time minutes">{ `:${this.state.minutes.padStart(2, '0')}` }</p>
        </div>
        <div className='music-wrapper'>
          {/* <Music /> */}
        </div>
      </div>
    );
  }
}


export default Clock;
