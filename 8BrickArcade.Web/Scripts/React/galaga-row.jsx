var GalagaCharacterPage = React.createClass({
	getInitialState() {
		return {
			selected: ""
		};
	},
	onClick: function (name) {
		this.setState({
			selected: name
		});
	},
	getCharacter: function (name) {
		var char = null;
		var rows = this.props.data.map(function (c) {
			if (c.Name.toLowerCase() == name.toLowerCase()) {
				char = c;
			}
		});
		return char;
	},
	render: function () {
		if (this.state.selected == "") {
			return (
				<div>
					<hr />
					<h1>Characters</h1>
					<hr />
					<div>
						<GalagaCharacterList data={this.props.data} onClick={this.onClick} />
					</div>
					<br />
					<GalagaNavigation data={this.props.data} onClick={this.onClick} footer="true" />
				</div>
			);
		} else {
			var char = this.getCharacter(this.state.selected);
			return (
				<div>
					<hr />
					<h1>
						<a className="highlight" href="/galaga/characters/">&raquo;&nbsp;Characters&nbsp;&laquo;</a>
					</h1>
					<hr />
					<GalagaNavigation data={this.props.data} onClick={this.onClick} />
					<hr />
					<h2>{char.Name}</h2>
					<GalagaStates data={char} />
					<hr />
					<br />
					<GalagaNavigation data={this.props.data} onClick={this.onClick} footer="true" />
				</div>
			);
		}
	}
});

var GalagaCharacterList = React.createClass({
	render: function () {
		var click = this.props.onClick;
		var rows = this.props.data.map(function (c) {
			return (
				<div key={c.Id}>
					<a className="galaga-list" href={"/galaga/characters/#" + c.Name.toLowerCase()} onClick={() => click(c.Name.toLowerCase())}>
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