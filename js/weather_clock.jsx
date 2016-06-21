const React = require('react');
const Clock = require('./clock.jsx');
const Weather = require('./weather.jsx');

const WeatherClock = React.createClass({
  render  () {
    return(
      <div>
        <Clock/>
        <br/>
        <br/>
        <Weather/>
      </div>
    );
  }
});

module.exports = WeatherClock;
