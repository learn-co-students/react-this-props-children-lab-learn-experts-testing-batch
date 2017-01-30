const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithClassName = React.Children.map(this.props.children, child =>
    {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div className="theme">
        {childrenWithClassName}
      </div>
    );
  }
}
module.exports = ThemedDecorations;
