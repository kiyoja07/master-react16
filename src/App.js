import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";


class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneeprayer"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}


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

const ErrorFallback = () => " Sorry something went wrong";

// Fragment를 사용해 여러개 리턴 가능, span으로 감싸지 않아도 됨
// string을 리턴할 수 있음
class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    return (
      <Fragment> 
        <ReturnTypes />
        <Portals />
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
