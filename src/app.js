var userName = "Visakh";

var template = 
(
    <h1>This is JSX written by {userName}
        <p>Hello</p>
    </h1>
);

ReactDOM.render(template, document.getElementById("app"));