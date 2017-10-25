var GalagaViewer = React.createClass({
    getInitialState: function () {
        return {
			src: "",
			drag: false,
			start: 0,
			width: 0
        };
    },
    changeView: function (a) {
        this.setState({
            src: this.buildUrl(a)
        });
	},
	dragStart: function (e) {
		this.setState({
			drag: true,
			start: e.clientX,
			width: e.target.width
		});     
	},
	dragEnd: function (e) {
		this.setState({
			drag: false
		});     
	},
	dragView: function (e) {
		var delta = e.clientX - this.state.start;
		var a = (Math.round(8 * delta / this.state.width) % 8) * -45;
		if (a == -0) a = 0;
		if (a < 0) a += 360;
		var url = this.buildUrl(a);
		this.setState({
			src: url
		});
	},
	buildUrl: function (a) {
		var name = this.props.data.Name.toLowerCase();
		var angle = a.toString();
		var degrees = "000".substring(angle.length) + angle;
		return "/images/galaga/angles/" + name + "-" + degrees + ".jpg"
	},
    render: function () {
		var name = this.props.data.Name.toLowerCase();
		var url = this.buildUrl(0);
		if (this.state.src == "") {
			this.state.src = url
        }

        var angles = [];
        for (var a = 0; a < 360; a += 45) {
            var angle = a.toString();
            var degrees = "000".substring(angle.length) + angle;
            angles.push(<GalagaViewerAngle key={a} name={name} degrees={degrees} onChange={this.changeView} />);
        }

        return (
            <div className="galaga-angles">
				{angles}
				<div>
					<img id="galaga-angles" src={this.state.src} onDrag={this.dragView} onDragStart={this.dragStart} onDragEnd={this.dragEnd} />
                </div>
            </div>
        );            
    }
});

var GalagaViewerAngle = React.createClass({
    render: function () {
		return (
            <a href="#360" onClick={() => this.props.onChange(this.props.degrees)} onMouseEnter={() => this.props.onChange(this.props.degrees)}>
                <img src={"/images/galaga/angles/thumb/" + this.props.name + "-" + this.props.degrees + ".jpg"} />
            </a>
        );
    }
});