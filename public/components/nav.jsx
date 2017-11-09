var React = require('react');
var {link} =require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
    <div>
      <h2>Nav Component</h2>
      <link to="/">Albums</link>
      <link to="/WishList">WishList</link>
      </div>
    );
  }
});

module.exports = Nav;
