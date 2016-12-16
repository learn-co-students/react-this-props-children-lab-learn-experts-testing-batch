import React from 'react';

class ThemedDecorations extends React.Component {
  render(){
    const childrenWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    })
    return(
      <div>
        {childrenWithProp}
      </div>
    )
  }
}

module.exports = ThemedDecorations;