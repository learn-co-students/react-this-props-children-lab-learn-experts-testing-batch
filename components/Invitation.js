export default class Invitation extends React.Component {
  render(){
    return (
      <div>
      <h1>"You've been invited!"</h1>
      {this.props.children}
      </div>
      // React.Children.map(this.props.children, child => {return }
    );
  }
}
