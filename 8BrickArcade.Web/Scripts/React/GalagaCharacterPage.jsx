class GalagaCharacterPage extends React.Component{
	getInitialState() {
		// preload selected character
		var initial = this.props.selected ? this.props.selected : "";
		return {
			selected: initial,
			initial: initial
		};
	}
	componentDidMount() {
		if (typeof window.history !== 'undefined' && typeof window.history.replaceState === 'function') {
			window.addEventListener('popstate', this.navigatePage);
		}
	}
	componentDidUpdate() {
		if (typeof document !== 'undefined' && typeof document === 'function') {
			document.getElementById("nav").scrollIntoView(); // scroll to nav
		}
	}
	navigatePage(event) {
		var name = "";
		if (event.state)
			name = event.state.name;
		else
			name = this.state.initial;

		// update state and refresh
		this.setState({
			selected: name
		});
	}
	onClick(event, name) {
		alert("test");
		console.log(event, name);
		// prevent follow href
		event.preventDefault();

		// make sure window exists (client side)
		if (typeof (window) !== 'undefined') {
			// update history if supported
            if (typeof window.history !== 'undefined' && typeof window.history.replaceState === 'function') {
				window.history.pushState({ name: name }, "Galaga - " + name, "/galaga/characters/" + name + "#nav");
            }
		}

		// update state and refresh
		this.setState({
			selected: name
		});
	}
	getCharacter (name) {
		// look up character data from name
		var char = null;
		if (name && name.length > 1) {
			var rows = this.props.data.map(function (c) {
				if (c.Name.toLowerCase() === name.toLowerCase()) {
					char = c;
				}
			});
		}
		return char;
	}
	render() {
		// render list of characters if none selected
		if (this.state && this.state.selected && this.state.selected === "") {
			// render page for a specific character if selected
			var char = this.getCharacter(this.state.selected);
			return (
				<div>
					<hr />
					<a id="nav" />
					<h1>
						<a className="highlight" href="/galaga/characters/">&raquo;&nbsp;Characters&nbsp;&laquo;</a>
					</h1>
					<hr />
					<GalagaNavigation data={this.props.data} onClick={this.onClick} />
					<hr />
					<h2>{char.Name}</h2>
					<GalagaStates data={char} />
					<hr />
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
		} else {
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
		}
	}
}