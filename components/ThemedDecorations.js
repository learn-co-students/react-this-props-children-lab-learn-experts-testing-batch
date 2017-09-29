import React from 'react'

export default class ThemedDecorations extends React.Component {
  render(){
    const propsWithTheme = React.Children.map(this.props.children, child => {
      // other solution
      // return React.cloneElement(child, {
      //     theme: this.props.theme
      // });
      return (
        <div className={this.props.theme}>{child}</div>
      );
    });

    return (
      <div>
        {propsWithTheme}
      </div>
    );
  }
}

module.exports = ThemedDecorations
