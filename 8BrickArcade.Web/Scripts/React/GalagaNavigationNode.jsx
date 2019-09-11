class GalagaNavigationNode extends React.Component{
    render() {
		var name = this.props.data.Name.toLowerCase();
		var click = this.props.onClick ? this.props.onClick : function () { };
		return (
			<a href={"/galaga/characters/" + name + "#nav"} onClick={(e) => click(e, name)}>
                {this.props.lego &&
                    <img src={"/images/galaga/icons/lego/" + name + ".png"} />
                }
                {this.props.svg &&
                    <img src={"/images/galaga/icons/svg/" + name + ".svg"} />
                }
            </a>
        );
    }
}