import React, {Component} from 'react'

class ThemedDecorations extends Component {
  render() {
    const updatedChildren = React.Children.map(this.props.children, child => {
        return (<div className='heaven'>{child}</div>)
    })
    return (
      <div>
        {updatedChildren}
      </div>
    );
  }
}

module.exports = ThemedDecorations
