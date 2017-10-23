var GalagaNavigation = React.createClass({
    render: function () {
        var characterNodes = this.props.data.map(function (character) {
            return (
                <GalagaNavigationLink character={character} key={character.Id}>
                </GalagaNavigationLink>
            );
        });
        return (
            <div className="galaga-nav2">
                <div>
                    {characterNodes}
                </div>
            </div>
        );
    }
});

var GalagaNavigationLink = React.createClass({
    render: function () {
        return (
            <a href={this.props.character.Page}>
                <img src={this.props.character.Image} />
            </a>
        );
    }
});