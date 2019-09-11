class GalagaEvolutionRow extends React.Component{
    render() {
        var name = this.props.data.Name.toLowerCase();
        return (
            <div className="row evolution-row">
                <GalagaEvolutionCell Image={"/images/galaga/icons/svg/" + name + ".svg"} />
				<GalagaEvolutionCell Image={"/images/galaga/evolution/" + name + "-2.png"} />
				<GalagaEvolutionCell Image={"/images/galaga/evolution/" + name + "-3.png"} />
				<GalagaEvolutionCell Image={"/images/galaga/evolution/" + name + "-4.png"} />
            </div>
        );
    }
}