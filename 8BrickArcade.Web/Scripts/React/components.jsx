﻿var data = [
	{ Id: 1, Author: "Daniel Lo Nigro", Text: "Hello ReactJS.NET World!" },
	{ Id: 2, Author: "Pete Hunt", Text: "This is one comment" },
	{ Id: 3, Author: "Jordan Walke", Text: "This is *another* comment" }
];

var CommentBoxStatic = React.createClass({
	render: function () {
		return (
			<div className="commentBox">
				<h2>Comment Box Static</h2>
				<CommentList data={this.props.data} />
				<CommentForm />
			</div>
		);
	}
});

var CommentBox = React.createClass({
	getInitialState: function () {
		return { data: [] };
	},
	componentWillMount: function () {
		var xhr = new XMLHttpRequest();
		xhr.open('get', this.props.url, true);
		xhr.onload = function () {
			var data = JSON.parse(xhr.responseText);
			this.setState({ data: data });
		}.bind(this);
		xhr.send();
	},
	render: function () {
		return (
			<div className="commentBox">
				<h2>Comment Box Dynamic</h2>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function () {
		var commentNodes = this.props.data.map(function (comment) {
			return (
				<Comment author={comment.Author} key={comment.Id}>
					{comment.Text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function () {
		return (
			<div className="commentForm">
				Hello, world! I am a CommentForm.
      </div>
		);
	}
});

var Comment = React.createClass({
	render: function () {
		return (
			<div className="comment">
				<h3 className="commentAuthor">
					{this.props.author}
				</h3>
				{this.props.children}
			</div>
		);
	}
});
