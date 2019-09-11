class GalagaStates extends React.Component{
    render() {
        var name = this.props.data.Name;
        var states = this.props.data.HasStates;
        return (
            <div className="galaga-states">
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1">
                        <img className="img-responsive" src={"/images/galaga/states/" + name + "-angle.png"} />
                    </div>
                </div>
                <div className="galaga-state">
                    <div>
                        <img src={"/images/galaga/states/" + name + "-open.png"} />
                    </div>
                    <span>
                        <img src={"/images/galaga/icons/svg/" + name + ".svg"} />
                    </span>
                </div>
                {states &&
                    <div className="galaga-state">
                        <div>
                            <img src={"/images/galaga/states/" + name + "-closed.png"} />
                        </div>
                        <span>
                            <img src={"/images/galaga/icons/svg/" + name + "2.svg"} />
                        </span>
                    </div>
                }
            </div>
        );
    }
}