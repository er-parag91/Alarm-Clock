import React, { Component } from "react";
import { connect } from "react-redux";
import Clock from "react-clock";
import "./Clock.css";
import DateTimePicker from "react-datetime-picker";

class Watch extends Component {
  componentDidMount() {
    setInterval(() => this.props.updateState(), 1000);
  }
  render() {
    let assignedClass = "Page";
    if (this.props.alarmTime && +this.props.time > +this.props.alarmTime) {
      assignedClass = ["Page", "Alert"].join(" ");
    }
    return (
      <div className={assignedClass}>
        <h4 style={{ textAlign: "center" }}>
          Current Time: <span>{this.props.time.toLocaleTimeString()}</span>
        </h4>
        <Clock
          className="Watch"
          hourHandLength={70}
          minuteHandLength={80}
          secondHandLength={85}
          hourHandOppositeLength={18}
          value={this.props.time}
          hourMarksLength={10}
          size={400}
        />
        <span>Alarm Time</span>
        <DateTimePicker
          clockClassName="TimePicker"
          value={this.props.alarmTime}
          onChange={this.props.updateAlarm}
          minDate={new Date()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.date,
    alarmTime: state.alarmTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateState: () => dispatch({ type: "SET_TIME" }),
    updateAlarm: time => dispatch({ type: "SET_ALARM", time })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watch);
