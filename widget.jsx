'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Tabs = require('./js/tabs.jsx');
const WeatherClock = require('./js/weather_clock.jsx');
const Autocomplete = require('./js/autocomplete.jsx');

export default class Main extends React.Component {

  render() {
    let items = [
      {name: "Cartman",
       content: "Respect my authoritah"
       },
      {name: "Stan",
       content: "Whatever stan would say..."
       }
    ];

    const names = ["Blake Wuensche",
    "Criselda Velasquez",
    "Lizette Jang",
    "Sherri Nealey",
    "Cesar Herz",
    "Zetta Gartland",
    "Kina Dunnington",
    "Eusebio Main",
    "Alberto Morita",
    "Alysia Suther",
    "Jamaal Harbor",
    "Portia Breuer",
    "Percy Classen",
    "Aura Suman",
    "Tanja Corrigan",
    "Valentina Puglisi",
    "Chang Downer",
    "Gertude Tedder",
    "Kimberlee Silveira",
    "Alfred Warshaw"];

    return(
      <div>
        <Tabs items={items} />
        <br/>
        <br/>
        <WeatherClock />
        <br />
        <br />
        <Autocomplete names={names} />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Main />, document.getElementById('main'));
});
