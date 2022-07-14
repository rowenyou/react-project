import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집"]);
  let [따봉갯수, 따봉갯수변경] = useState(0);
  let date = "2021. 12. 13";
  var data = "안녕하세요";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <div>{data}</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]} <span>?</span> {따봉갯수}{" "}
        </h3>
        <p>{date}</p>
      </div>
      <div className="list">
        <h3>
          {글제목[1]} <span>?</span> {따봉갯수}{" "}
        </h3>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;
