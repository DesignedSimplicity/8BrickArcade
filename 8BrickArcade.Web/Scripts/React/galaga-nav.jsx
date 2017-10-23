﻿var GalagaNavigation = React.createClass({
    render: function () {
        var svg = (this.props.svg != undefined && this.props.svg);
        var lego = (this.props.lego === undefined || this.props.lego);
        var characterNodes = this.props.data.map(function (c) {
            return (
                <GalagaNavigationNode key={c.Id} data={c} svg={svg} lego={lego}>
                </GalagaNavigationNode>
            );
        });
        return (
            <div>
                {this.props.footer && 
                    <h4>Select a character:</h4>
                }
                <div className="galaga-nav">
                    <div>
                        {characterNodes}
                    </div>
                </div>
                {this.props.footer &&
                    <h4><a className="highlight" href="/galaga">&laquo; Back to Galaga</a></h4>
                }
            </div>
        );            
    }
});

var GalagaNavigationNode = React.createClass({
    render: function () {
        var name = this.props.data.Name.toLowerCase();
        return (
            <a href={"/galaga/characters/" + name}>
                {this.props.lego &&
                    <img src={"/images/galaga/states/" + name + "-open.png"} />
                }
                {this.props.svg &&
                    <img src={"/images/galaga/icons/svg/" + name + ".svg"} />
                }
            </a>
        );
    }
});