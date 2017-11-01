var GalagaEvolutionGrid = React.createClass({
    render: function () {
        var rows = this.props.data.map(function (c) {
            return (
                <a key={c.Id} href={"/galaga/characters/" + c.Name.toLowerCase()}>
                    <GalagaEvolutionRow data={c}>
                    </GalagaEvolutionRow>
                </a>
            );
        });
        return (
            <div>
                {rows}
            </div>
        );
    }
});

var GalagaEvolutionRow = React.createClass({
    render: function () {
        var name = this.props.data.Name.toLowerCase();
        return (
            <div className="row evolution-row">
                <GalagaEvolutionCell Image={"/images/galaga/icons/svg/" + name + ".svg"}>
                </GalagaEvolutionCell>
                <GalagaEvolutionCell Image={"/images/galaga/evolution/" + name + "-2.png"}>
                </GalagaEvolutionCell>
                <GalagaEvolutionCell Image={"/images/galaga/evolution/" + name + "-3.png"}>
                </GalagaEvolutionCell>
                <GalagaEvolutionCell Image={"/images/galaga/evolution/" + name + "-4.png"}>
                </GalagaEvolutionCell>
            </div>
        );
    }
});

var GalagaEvolutionCell = React.createClass({
    render: function () {
        return (
            <div className="col-xs-3">
                <div className="evolution-cell">
                    <img src={this.props.Image} />
                </div>
            </div>
        );
    }
});
