class GalagaNavigation extends React.Component{
	render() {
		var click = this.props.onClick;
		var svg = this.props.svg !== undefined && this.props.svg;
		var lego = this.props.lego === undefined || this.props.lego;
        var characterNodes = this.props.data.map(function (c) {
            return (
				<GalagaNavigationNode key={c.Id} data={c} svg={svg} lego={lego} onClick={click} />
            );
        });
        return (
            <div>
                {this.props.footer && 
                    <h4>Select a character:</h4>
                }
                <div className="galaga-nav">
                    <div>
                        {characterNodes}
                    </div>
                </div>
                {this.props.footer &&
                    <h4><a className="highlight" href="/galaga/">&laquo; Back to Galaga</a></h4>
                }
            </div>
        );            
    }
}