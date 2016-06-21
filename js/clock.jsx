const React = require('react');

const Clock = React.createClass({
  getInitialState() {
    return ({ clock: new Date() });
  },
  componentDidMount() {
    this.timeInterval = setInterval(this.tick, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.timeInterval);
  },
  tick() {
    this.setState({ clock: new Date() });
  },

  render() {
    return (
      <div className="time">{this.state.clock.toString()}</div>
    );

  }
});

module.exports = Clock;
