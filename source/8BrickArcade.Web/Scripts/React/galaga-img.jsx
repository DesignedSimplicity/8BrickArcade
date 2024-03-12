var GalagaStates = React.createClass({
    render: function () {
        var name = this.props.data.Name.toLowerCase();
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
});

var GalagaPrototypes = React.createClass({
    render: function () {
        var name = this.props.data.Name.toLowerCase();
        var src = "/images/galaga/prototype/" + name + "/";

        return (
            <div className="galaga-tri">
                <img src={src + "top.jpg"} />
                <img src={src + "left.jpg"} />
                <img src={src + "front.jpg"} />
                <img src={src + "back.jpg"} />
                <img src={src + "right.jpg"} />
                <img src={src + "bottom.jpg"} />
            </div>
        );
    }
});

var GalagaFlatlanders = React.createClass({
    render: function () {
        var name = this.props.data.Name.toLowerCase();
        var src = "/images/galaga/flatlander/" + name + "-";

        return (
            <div className="galaga-tri">
                <img src={src + "front.jpg"} />
                <img src={src + "side.jpg"} />
                <img src={src + "back.jpg"} />
            </div>
        );
    }
});
