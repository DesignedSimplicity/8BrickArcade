class GalagaFlatlanders extends React.Component{
    render() {
        var name = this.props.data.Name;
        var src = "/images/galaga/flatlander/" + name + "-";

        return (
            <div className="galaga-tri">
                <img src={src + "front.jpg"} />
                <img src={src + "side.jpg"} />
                <img src={src + "back.jpg"} />
            </div>
        );
    }
}