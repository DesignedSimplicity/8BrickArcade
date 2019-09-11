class GalagaPrototypes extends React.Component{
    render() {
        var name = this.props.data.Name;
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
}