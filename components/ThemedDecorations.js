const React = require('react');

class ThemedDecorations extends React.Component {
  render(){
    var updatedChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: 'decoration'
      });
    });

    return(
      <div>
        {updatedChildren}
      </div>
    );

  }
}

module.exports = ThemedDecorations;