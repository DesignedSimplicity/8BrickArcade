class GalagaCharacterList extends React.Component{
	render() {
		var click = this.props.onClick;
		var rows = this.props.data.map(function (c) {
			return (
				<div key={c.Id}>
					<a className="galaga-list" href={"/galaga/characters/#" + c.Name.toLowerCase()} onClick={(e) => click(e, c.Name.toLowerCase())}>
						<h2>{c.Name} &raquo;</h2>
						<GalagaCharacterRow name={c.Name} />
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
}