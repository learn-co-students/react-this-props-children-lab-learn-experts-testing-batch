export default class ThemedDecorations extends React.Component {
  render(){
    return (
      React.Children.map(this.props.children, child => {
        return (
          <div className='child'>
            {child}
          </div>
        );
      });
    );
  }
}
