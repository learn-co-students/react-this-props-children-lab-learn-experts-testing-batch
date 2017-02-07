const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const clonedKids = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
        {clonedKids}
      </div>
    );
  }
}

module.exports = ThemedDecorations;


