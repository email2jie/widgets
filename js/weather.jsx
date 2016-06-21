const React = require('react');

const Weather = React.createClass({

  getInitialState(){
    return({lat: "", lon: "", weather: {}});
  },
  getLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
      this.setState({lat: position.coords.latitude, lon: position.coords.longitude}, this.getWeather);
    }.bind(this));

  },

  getWeather(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               this.setState({weather: xmlhttp.responseText});
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=645c5d39c7603f17e23fcaffcea1a3c1`, true);
    xmlhttp.send();
  },
  render() {
    this.getLocation();
    return (
      <div>{this.state.weather.toString()}</div>
    );
  }
});

module.exports = Weather;
