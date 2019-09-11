class GalagaEvolutionGrid extends React.Component{
    render() {
        var rows = this.props.data.map(function (c) {
            return (
                <a key={c.Id} href={"/galaga/characters/" + c.Name.toLowerCase()}>
                    <GalagaEvolutionRow data={c} />
                </a>
            );
        });
        return (
            <div>
                {rows}
            </div>
        );
    }
}