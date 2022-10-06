import React, { Component } from "react";
import Subject from "./components/Subject.js";
import Main from "./components/Main.js";
import Content from "./components/Content.js";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            head: { title: "Web", sub: "world wide web" },
            contents: [
                { id: 1, title: "html", desc: "html html" },
                { id: 2, title: "css", desc: "css css" },
                { id: 2, title: "javascript", desc: "javascript javascript" },
            ],
        };
    }
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.head.title}
                    sub={this.state.head.sub}
                ></Subject>
                <Main data={this.state.contents}></Main>
                <Content
                    title="여기는 수동입력"
                    desc="여기도 수동입력 내용. 나머지는 자동"
                ></Content>
            </div>
        );
    }
}

export default App;
