const React = require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Autocomplete = React.createClass({
  getInitialState() {
    return({name: ''});
  },
  acceptName(event) {
    this.setState({name: event.currentTarget.innerHTML})
  },
  updateNames() {
    const input = document.getElementById("nameSearch").value;
    this.setState({name: input});
  },
  render() {
// filter((el) => { el.match(new RegExp(this.state.name)) })
    let suggestions;
    if(this.state.name === ""){
      suggestions = [];
    }else{
      suggestions = this.props.names.filter((el) => {
          return el.match(new RegExp(this.state.name, "i"));
      }).map((el) => {

        return <li key={el} onClick={this.acceptName}>{el}</li>;
      });
    }
    return (
      <div>
        <input id="nameSearch" type="text" onInput={this.updateNames} placeholder="Search for names here" value={this.state.name}></input>
        <ul className="name-list">
          <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={150} transitionLeaveTimeout={150}>
            {suggestions}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
});

module.exports = Autocomplete;
