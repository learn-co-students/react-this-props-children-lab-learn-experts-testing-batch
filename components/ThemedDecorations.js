const React = require('react');

export default class ThemedDecorations extends React.Component {
  render(){

    const childrenWithClassName = React.Children.map(this.props.children, child => {
      return (
        <div className="theme">{child}</div>
      );
    });
    return(
      <div>
        {childrenWithClassName}
      </div>
    );
  }
}

module.exports = ThemedDecorations;
