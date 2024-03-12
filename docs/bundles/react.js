var GalagaNavigation=React.createClass({displayName:"GalagaNavigation",render:function(){var n=this.props.onClick,t=this.props.svg!=undefined&&this.props.svg,i=this.props.lego===undefined||this.props.lego,r=this.props.data.map(function(r){return React.createElement(GalagaNavigationNode,{key:r.Id,data:r,svg:t,lego:i,onClick:n})});return React.createElement("div",null,this.props.footer&&React.createElement("h4",null,"Select a character:"),React.createElement("div",{className:"galaga-nav"},React.createElement("div",null,r)),this.props.footer&&React.createElement("h4",null,React.createElement("a",{className:"highlight",href:"/galaga/"},"« Back to Galaga")))}}),GalagaNavigationNode=React.createClass({displayName:"GalagaNavigationNode",render:function(){var n=this.props.data.Name.toLowerCase(),t=this.props.onClick?this.props.onClick:function(){};return React.createElement("a",{href:"/galaga/characters/"+n+"/#nav",onClick:function(i){return t(i,n)}},this.props.lego&&React.createElement("img",{src:"/images/galaga/icons/lego/"+n+".png"}),this.props.svg&&React.createElement("img",{src:"/images/galaga/icons/svg/"+n+".svg"}))}}),GalagaEvolutionGrid=React.createClass({displayName:"GalagaEvolutionGrid",render:function(){var n=this.props.data.map(function(n){return React.createElement("a",{key:n.Id,href:"/galaga/characters/"+n.Name.toLowerCase()},React.createElement(GalagaEvolutionRow,{data:n}))});return React.createElement("div",null,n)}}),GalagaEvolutionRow=React.createClass({displayName:"GalagaEvolutionRow",render:function(){var n=this.props.data.Name.toLowerCase();return React.createElement("div",{className:"row evolution-row"},React.createElement(GalagaEvolutionCell,{Image:"/images/galaga/icons/svg/"+n+".svg"}),React.createElement(GalagaEvolutionCell,{Image:"/images/galaga/evolution/"+n+"-2.png"}),React.createElement(GalagaEvolutionCell,{Image:"/images/galaga/evolution/"+n+"-3.png"}),React.createElement(GalagaEvolutionCell,{Image:"/images/galaga/evolution/"+n+"-4.png"}))}}),GalagaEvolutionCell=React.createClass({displayName:"GalagaEvolutionCell",render:function(){return React.createElement("div",{className:"col-xs-3"},React.createElement("div",{className:"evolution-cell"},React.createElement("img",{src:this.props.Image.toLowerCase()})))}}),GalagaViewer=React.createClass({displayName:"GalagaViewer",getInitialState:function(){return{start:0,width:0,angle:0,offset:0}},changeView:function(n){this.setState({angle:n})},dragStart:function(n){this.setState({start:n.touches[0].pageX,width:n.target.width,offset:this.state.angle})},dragView:function(n){var i=n.touches[0].pageX-this.state.start,t=Math.round(8*i/this.state.width)%8*-45;t+=this.state.offset;t<0&&(t+=360);t>=360&&(t-=360);(t==-0||t==360)&&(t=0);this.setState({angle:t})},render:function(){for(var t=this.props.data.Name.toLowerCase(),i=[],n=0;n<360;n+=45)i.push(React.createElement(GalagaViewerAngle,{key:n,name:t,angle:n,onChange:this.changeView}));return React.createElement("div",{className:"galaga-angles"},i,React.createElement("div",{onTouchStart:this.dragStart,onTouchMove:this.dragView},React.createElement(GalagaViewerAngleImage,{name:t,angle:this.state.angle,main:"true"})))}}),GalagaViewerAngle=React.createClass({displayName:"GalagaViewerAngle",render:function(){var n=this;return React.createElement("a",{onClick:function(){return n.props.onChange(n.props.angle)},onMouseOver:function(){return n.props.onChange(n.props.angle)}},React.createElement(GalagaViewerAngleImage,{name:this.props.name,angle:this.props.angle}))}}),GalagaViewerAngleImage=React.createClass({displayName:"GalagaViewerAngleImage",render:function(){var t=this.props.angle.toString(),r="000".substring(t.length)+t,i=this.props.main!=undefined,n="/images/galaga/angles/";return i||(n+="thumb/"),n+=this.props.name+"-"+r+".jpg",React.createElement("img",{draggable:i,src:n.toLowerCase()})}}),GalagaStates=React.createClass({displayName:"GalagaStates",render:function(){var n=this.props.data.Name.toLowerCase(),t=this.props.data.HasStates;return React.createElement("div",{className:"galaga-states"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-10 col-sm-offset-1"},React.createElement("img",{className:"img-responsive",src:"/images/galaga/states/"+n+"-angle.png"}))),React.createElement("div",{className:"galaga-state"},React.createElement("div",null,React.createElement("img",{src:"/images/galaga/states/"+n+"-open.png"})),React.createElement("span",null,React.createElement("img",{src:"/images/galaga/icons/svg/"+n+".svg"}))),t&&React.createElement("div",{className:"galaga-state"},React.createElement("div",null,React.createElement("img",{src:"/images/galaga/states/"+n+"-closed.png"})),React.createElement("span",null,React.createElement("img",{src:"/images/galaga/icons/svg/"+n+"2.svg"}))))}}),GalagaPrototypes=React.createClass({displayName:"GalagaPrototypes",render:function(){var t=this.props.data.Name.toLowerCase(),n="/images/galaga/prototype/"+t+"/";return React.createElement("div",{className:"galaga-tri"},React.createElement("img",{src:n+"top.jpg"}),React.createElement("img",{src:n+"left.jpg"}),React.createElement("img",{src:n+"front.jpg"}),React.createElement("img",{src:n+"back.jpg"}),React.createElement("img",{src:n+"right.jpg"}),React.createElement("img",{src:n+"bottom.jpg"}))}}),GalagaFlatlanders=React.createClass({displayName:"GalagaFlatlanders",render:function(){var t=this.props.data.Name.toLowerCase(),n="/images/galaga/flatlander/"+t+"-";return React.createElement("div",{className:"galaga-tri"},React.createElement("img",{src:n+"front.jpg"}),React.createElement("img",{src:n+"side.jpg"}),React.createElement("img",{src:n+"back.jpg"}))}}),GalagaCharacterPage=React.createClass({displayName:"GalagaCharacterPage",getInitialState:function(){var n=this.props.selected?this.props.selected:"";return{previous:null,selected:n,initial:n,changing:!1}},componentDidMount:function(){typeof window.history!="undefined"&&typeof window.history.replaceState=="function"&&window.addEventListener("popstate",this.navigatePage)},componentWillUnmount:function(){this.transitionTime&&clearTimeout(this.transitionTime)},componentDidUpdate:function(){var n=this;this.state.changing&&(this.transitionTime=setTimeout(function(){n.setState(function(){return{changing:!1}})},400));typeof document!="undefined"&&typeof document=="function"&&document.getElementById("nav").scrollIntoView()},navigatePage:function(n){var t="";t=n.state?n.state.name:this.state.initial;this.setState({selected:t})},onClick:function(n,t){if(n.preventDefault(),typeof window!="undefined"&&typeof window.history!="undefined"&&typeof window.history.replaceState=="function"&&window.history.pushState({name:t},"Galaga - "+t,"/galaga/characters/"+t.toLowerCase()+"/#nav"),this.state.selected==="")this.setState({previous:"",selected:t,changing:!1});else if(this.state.selected!==t){var i=this.state.selected;this.setState({previous:i,selected:t,changing:!0})}},getCharacter:function(n){var t=null,i;return n&&n.length>1&&(i=this.props.data.map(function(i){i.Name.toLowerCase()===n.toLowerCase()&&(t=i)})),t},render:function(){if(this.state.selected==="")return React.createElement("div",null,React.createElement("hr",null),React.createElement("h1",null,"Characters"),React.createElement("hr",null),React.createElement("div",null,React.createElement(GalagaCharacterList,{data:this.props.data,onClick:this.onClick})),React.createElement("br",null),React.createElement(GalagaNavigation,{data:this.props.data,onClick:this.onClick,footer:"true"}));var n=this.getCharacter(this.state.changing?this.state.previous:this.state.selected);return n||(n=this.state.selected),React.createElement("div",null,React.createElement("hr",null),React.createElement("a",{id:"nav"}),React.createElement("h1",null,React.createElement("a",{className:"highlight",href:"/galaga/characters/"},"» Characters «")),React.createElement("hr",null),React.createElement(GalagaNavigation,{data:this.props.data,onClick:this.onClick}),React.createElement("hr",null),React.createElement("div",{className:this.state.changing?"galaga-out":"galaga-in"},React.createElement("h2",null,n.Name),React.createElement(GalagaStates,{data:n}),React.createElement("hr",null),React.createElement(GalagaViewer,{data:n}),n.HasEvolution&&React.createElement("div",null,React.createElement("hr",null),React.createElement("h2",null,"3D Prototypes"),React.createElement(GalagaPrototypes,{data:n}),React.createElement("hr",null),React.createElement("h2",null,"Flat Landers"),React.createElement(GalagaFlatlanders,{data:n}))),React.createElement("hr",null),React.createElement("br",null),React.createElement(GalagaNavigation,{data:this.props.data,onClick:this.onClick,footer:"true"}))}}),GalagaCharacterList=React.createClass({displayName:"GalagaCharacterList",render:function(){var n=this.props.onClick,t=this.props.data.map(function(t){return React.createElement("div",{key:t.Id},React.createElement("a",{className:"galaga-list",href:"/galaga/characters/#"+t.Name.toLowerCase(),onClick:function(i){return n(i,t.Name.toLowerCase())}},React.createElement("h2",null,t.Name," »"),React.createElement(GalagaCharacterRow,{name:t.Name})),React.createElement("hr",null))});return React.createElement("div",null,t)}}),GalagaCharacterRow=React.createClass({displayName:"GalagaCharacterRow",render:function(){var n=this.props.name.toLowerCase();return React.createElement("div",{className:"row galaga-list-row"},React.createElement("div",{className:"col-xs-6"},React.createElement("img",{className:"img-responsive",src:"/images/galaga/states/"+n+"-open.png"})),React.createElement("div",{className:"col-xs-6"},React.createElement("img",{className:"img-responsive galaga-list-img-angle",src:"/images/galaga/states/"+n+"-angle.png"})))}})