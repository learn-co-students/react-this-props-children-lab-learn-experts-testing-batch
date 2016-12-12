const React = require('react')

class ThemedDecorations extends React.Component {
  render(){
    const eachChildWithProp = React.Children.map(this.props.children, child =>{
      return React.cloneElement(child, {
        className: this.props.theme,
      })
    })

    return (
      <div>
        {eachChildWithProp}
      </div>
    )
  }
}

module.exports = ThemedDecorations
