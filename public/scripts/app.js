"use strict";

var userName = "Visakh";

var template = React.createElement(
    "h1",
    null,
    "This is JSX written by ",
    userName,
    React.createElement(
        "p",
        null,
        "Hello"
    )
);

ReactDOM.render(template, document.getElementById("app"));
