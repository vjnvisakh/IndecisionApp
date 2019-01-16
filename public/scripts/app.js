"use strict";

var template = React.createElement(
    "h1",
    null,
    "This is JSX",
    React.createElement(
        "p",
        null,
        "Hello"
    )
);

ReactDOM.render(template, document.getElementById("app"));
