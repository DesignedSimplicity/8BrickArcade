var GalagaEvolution = React.createClass({
    render: function () {
        var rows = this.props.data.map(function (c) {
            return (
                <GalagaEvolutionRow key={c.Id} data={c}>
                </GalagaEvolutionRow>
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
        return (
            <a href={"/galaga/character/#" + this.props.data.Name}>
                <div className="row evolution-row">
                    <GalagaEvolutionCell Image={"/images/galaga/icons/svg/" + this.props.data.Name + ".svg"}>
                    </GalagaEvolutionCell>
                    <GalagaEvolutionCell Image={"/images/galaga/evolution/" + this.props.data.Name + "-2.png"}>
                    </GalagaEvolutionCell>
                    <GalagaEvolutionCell Image={"/images/galaga/evolution/" + this.props.data.Name + "-3.png"}>
                    </GalagaEvolutionCell>
                    <GalagaEvolutionCell Image={"/images/galaga/evolution/" + this.props.data.Name + "-4.png"}>
                    </GalagaEvolutionCell>
                </div>
            </a>
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
