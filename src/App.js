import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

// Portals는 react root 밖에 리액트를 넣을 수 있게 해준다. react-dom에 위치
class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

// Fragment를 사용해 여러개 리턴 가능, span으로 감싸지 않아도 됨
// string을 리턴할 수 있음
class App extends Component {
  render() {
    return (
      <Fragment> 
        <ReturnTypes />
        <Portals />
      </Fragment>
    );
  }
}

export default App;
