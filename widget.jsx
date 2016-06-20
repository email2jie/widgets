'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Tabs = require('./js/tabs.jsx');

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
    
    return(
      <div>
        Hello World
        <Tabs items={items} />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Main />, document.getElementById('main'));
});
