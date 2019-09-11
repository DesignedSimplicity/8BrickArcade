class GalagaViewer extends React.Component {
	getInitialState() {
		return {
			start: 0,
			width: 0,
			angle: 0,
			offset: 0
		};
	}
	changeView(a) {
		this.setState({
			angle: a
		});
	}
	dragStart(e) {
		console.log("dragStart");
		this.setState({
			start: e.touches[0].pageX,
			width: e.target.width,
			offset: this.state.angle
		});
	}
	dragView(e) {
		var delta = e.touches[0].pageX - this.state.start;
		var a = (Math.round(8 * delta / this.state.width) % 8) * -45;
		a += this.state.offset;
		if (a < 0) a += 360;
		if (a >= 360) a -= 360;
		if (a == -0 || a == 360) a = 0;
		console.log("dragView", a);
		this.setState({
			angle: a
		});
	}
	render() {
		var name = this.props.data.Name.toLowerCase();

		var angles = [];
		for (var a = 0; a < 360; a += 45) {
			angles.push(<GalagaViewerAngle key={a} name={name} angle={a} onChange={this.changeView} />);
		}

		return (
			<div className="galaga-angles">
				{angles}
				<div onTouchStart={this.dragStart} onTouchMove={this.dragView}>
					<GalagaViewerAngleImage name={name} angle={this.state.angle} main="true" />
				</div>
			</div>
		);
	}
}