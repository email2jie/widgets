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
          <h1>el.name</h1>
        </li>
      );

    });

    return (

      <ul>
        {headerItems}
      </ul>

    );
  }

});


module.exports = Tabs;
