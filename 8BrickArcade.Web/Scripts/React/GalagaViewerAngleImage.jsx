class GalagaViewerAngleImage extends React.Component {
	render() {
		var angle = this.props.angle.toString();
		var degrees = "000".substring(angle.length) + angle;

		var main = this.props.main != undefined;
		var image = "/images/galaga/angles/";
		if (!main) image += "thumb/";
		image += this.props.name + "-" + degrees + ".jpg";

		return (
			<img draggable={main} src={image} />
		);
	}
}