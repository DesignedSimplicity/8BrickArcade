var GalagaCharacterList = React.createClass({
	render: function () {
		var rows = this.props.data.map(function (c) {
			return (
				<div>
					<a key={c.Id} className="galaga-list" href={"/galaga/characters/#" + c.Name.toLowerCase()}>
						<h2>{c.Name} &raquo;</h2>
						<GalagaCharacterRow name={c.Name}>
						</GalagaCharacterRow>
					</a>
					<hr />
				</div>
			);
		});
		return (
			<div>
				{rows}
			</div>
		);
	}
});

var GalagaCharacterRow = React.createClass({
	render: function () {
		var name = this.props.name.toLowerCase();
		return (
			<div className="row galaga-list-row">
				<div className="col-xs-6">
					<img className="img-responsive" src={"/images/galaga/states/" + name + "-open.png"} />
				</div>
				<div className="col-xs-6">
					<img className="img-responsive galaga-main-char-img-angle" src={"/images/galaga/states/" + name + "-angle.png"} />
				</div>
			</div>
		);
	}
});