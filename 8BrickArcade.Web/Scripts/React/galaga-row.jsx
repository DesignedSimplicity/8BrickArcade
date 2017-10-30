var GalagaCharacterPage = React.createClass({
	getInitialState() {
		var selected = "";

		// load currently selected from hash
		/*
		if (typeof (window) != 'undefined' && window.location.hash) {
			name = window.location.hash.substring(1);
			var c = this.getCharacter(name);
			selected = (c == null ? "" : name);
		}*/

		return {
			selected: selected
		};
	},
	onClick: function (name) {
		this.setState({
			selected: name
		});
	},
	getCharacter: function (name) {
		var char = null;
		if (name && name.length > 1) {
			var rows = this.props.data.map(function (c) {
				if (c.Name.toLowerCase() == name.toLowerCase()) {
					char = c;
				}
			});
		}
		return char;
	},
	componentDidMount: function() {
		if (typeof (window) != 'undefined') {
			window.scrollTo(0, 0);
		}
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
					<a id="360"></a>
					<GalagaViewer data={char} />
					{char.HasEvolution &&
						<div>
							<hr />
							<h2>3D Prototypes</h2>
							<GalagaPrototypes data={char} />
							<hr />
							<h2>Flat Landers</h2>
							<GalagaFlatlanders data={char} />
						</div>
					}
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