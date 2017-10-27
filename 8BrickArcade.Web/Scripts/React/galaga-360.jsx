var GalagaViewer = React.createClass({
    getInitialState: function () {
        return {
			start: 0,
            width: 0,
            angle: 0,
            offset: 0
        };
    },
    changeView: function (a) {
        this.setState({
            angle: a
        });
	},
    dragStart: function (e) {
		this.setState({
			start: e.clientX,
            width: e.target.width,
            offset: this.state.angle
		});     
	},
	dragView: function (e) {
		var delta = e.clientX - this.state.start;
        var a = (Math.round(8 * delta / this.state.width) % 8) * -45;
        a += this.state.offset;
        if (a < 0) a += 360;
        if (a >= 360) a -= 360;
        if (a == -0 || a == 360) a = 0;
		this.setState({
			angle: a
        });
	},
    render: function () {
		var name = this.props.data.Name.toLowerCase();

        var angles = [];
        for (var a = 0; a < 360; a += 45) {
            angles.push(<GalagaViewerAngle key={a} name={name} angle={a} onChange={this.changeView} />);
        }

        return (
            <div className="galaga-angles">
				{angles}
                <div onDragStart={this.dragStart} onDrag={this.dragView} onDragEnd={this.dragView}>
                    <GalagaViewerAngleImage name={name} angle={this.state.angle} main="true" />
                </div>
            </div>
        );            
    }
});

var GalagaViewerAngle = React.createClass({
    render: function () {
		return (
            <a href="#360" onClick={() => this.props.onChange(this.props.angle)} onMouseOver={() => this.props.onChange(this.props.angle)}>
                <GalagaViewerAngleImage name={this.props.name} angle={this.props.angle} />
            </a>
        );
    }
});

var GalagaViewerAngleImage = React.createClass({
    render: function () {
        var angle = this.props.angle.toString();
        var degrees = "000".substring(angle.length) + angle;

        var main = this.props.main != undefined;
        var image = "/images/galaga/angles/";
        if (!main) image += "thumb/";
        image += this.props.name + "-" + degrees + ".jpg";

        return (
            <img draggable={main} src={image} />
        );
    }
});