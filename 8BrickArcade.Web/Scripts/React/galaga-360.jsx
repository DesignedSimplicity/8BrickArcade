var GalagaViewer = React.createClass({
    getInitialState: function () {
        return {
            src: ""
        };
    },
    changeView: function (e) {
        this.setState({
            src: e.target.src.replace("/thumb/", "/")
        });        
    },
    render: function () {
        var name = this.props.data.Name.toLowerCase();
        if (this.state.src == "") {
            this.state.src = "/images/galaga/angles/" + name + "-000.jpg"
        }

        var angles = [];
        for (var i = 0; i < 360; i += 45) {
            var angle = i.toString();
            var degrees = "000".substring(angle.length) + angle;
            angles.push(<GalagaViewerAngle key={i} name={name} degrees={degrees} onChange={this.changeView} />);
        }

        return (
            <div className="galaga-angles">
                {angles}
                <div>
                    <GalagaViewerZoom name="fighter" src={this.state.src} />
                </div>
            </div>
        );            
    }
});

var GalagaViewerAngle = React.createClass({
    render: function () {
        return (
            <a href="#360" onClick={this.props.onChange} onMouseEnter={this.props.onChange}>
                <img src={"/images/galaga/angles/thumb/" + this.props.name + "-" + this.props.degrees + ".jpg"} />
            </a>
        );
    }
});

var GalagaViewerZoom = React.createClass({
    render: function () {
        return (
            <img id="galaga-angles" src={this.props.src} />
        );
    }
});