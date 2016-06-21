const React = require("react");

const Tabs = React.createClass({

  getInitialState(){
    return ({currentTab: 0});
  },

  clickHandler(index){
    this.setState({currentTab: index});

  },

  render(){

    const headerItems = this.props.items.map((el, i)=>{
      return(
        <li key={i} onClick={this.clickHandler.bind(this, i)}>
          <h1>{el.name}</h1>
        </li>
      );

    });

    return (
      <div>
        <ul>
          {headerItems}
        </ul>
        <article>{this.props.items[this.state.currentTab].content}</article>
      </div>
    );
  }

});


module.exports = Tabs;
