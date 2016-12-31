const React = require('react');

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithDecoration = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    return (
      <div>
        {childrenWithDecoration}
      </div>
    );
  }
}

ThemedDecorations.defaultProps = {
  
};

ThemedDecorations.propTypes = {
  theme: React.PropTypes.string
};

module.exports = ThemedDecorations