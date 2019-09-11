class GalagaViewerAngle extends React.Component {
	render() {
		return (
			<a onClick={() => this.props.onChange(this.props.angle)} onMouseOver={() => this.props.onChange(this.props.angle)}>
				<GalagaViewerAngleImage name={this.props.name} angle={this.props.angle} />
			</a>
		);
	}
}