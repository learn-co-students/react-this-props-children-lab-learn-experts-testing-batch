const React = require('react');

class ThemedDecorations extends React.Component {

  render(){
    const customChildren = React.Children.map(this.props.children, child => {
      return (
        <div className="theme">{child}</div>
      )
    })
    return(
      <div>
        {customChildren}
      </div>
    )
  }
}

module.exports = ThemedDecorations;
