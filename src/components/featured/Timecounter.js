import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
export default class Timecounter extends Component {
  state = {
    deadline: 'Dec, 16, 2019',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  };

  getTimeUntil() {}
  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil;
    }, 1000);
  }
  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">2</div>
              <div className="countdown_tag">hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">30</div>
              <div className="countdown_tag">min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
