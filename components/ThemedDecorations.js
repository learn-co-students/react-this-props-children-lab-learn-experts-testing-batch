const React = require('react')

class ThemedDecorations extends React.Component{
  render(){
    const newChild = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {className: this.props.theme})
    })
    return(
      <div className="ThemedDecorations">
        {newChild}
      </div>
    )
  }
}

module.exports = ThemedDecorations;