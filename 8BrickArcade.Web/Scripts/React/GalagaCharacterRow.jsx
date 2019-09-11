class GalagaCharacterRow extends React.Component{
	render() {
		var name = this.props.name.toLowerCase();
		return (
			<div className="row galaga-list-row">
				<div className="col-sm-6">
					<img className="img-fluid" src={"/images/galaga/states/" + name + "-open.png"} />
				</div>
				<div className="col-sm-6">
					<img className="img-fluid galaga-main-char-img-angle" src={"/images/galaga/states/" + name + "-angle.png"} />
				</div>
			</div>
		);
	}
}