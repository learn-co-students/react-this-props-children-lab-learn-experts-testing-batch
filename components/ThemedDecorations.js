const React = require('react');

class ThemedInvitation extends React.Component {
	render() {
		const childrenWithProp = React.Children.map(this.props.children, child => {
				return React.cloneElement(child, {className: this.props.theme})
			})
		return (
			<div>
				{ childrenWithProp }
			</div>
		)
	}
}

module.exports = ThemedInvitation;