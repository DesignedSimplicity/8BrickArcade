class GalagaEvolutionCell extends React.Component{
    render() {
        return (
            <div className="col-sm-3">
                <div className="evolution-cell">
                    <img src={this.props.Image} />
                </div>
            </div>
        );
    }
}