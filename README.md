# Master React

master all the new features of React 16

### 2 Return Types Strings and Fragments
react16전에는 컴포넌트들을 return해주려면 일일히 span으로 감싸줬어야 했는데 react16부터는 Fragment가 지원되면서 간단히 WRAP해줄 수 있습니다. 또한 리턴타입으로 string을 쓸 수 있습니다.

### 3 Portals
React.js 는 div를 찾아서 마운트를 하는데(최상단. index,js root id)
React 루트 밖을 변경해야 할 경우 portals를 쓸수 있습니다.
(portals는 리액트 루트 밖에 리액트를 넣을 수 있게 해주며 다른페이지에서 로딩을 할때 유용합니다. iframe, 워드프레스 등.)
또한 potals는 리액트 안에 있지 않고 React.dom에 위치 하게 됩니다.

### 4 Error Boundaries
Error Boundaries는 리액트 기능으로  부모 컴포넌트에 componentDidCatch를 사용하면 에러를 핸들링 할 수있다.
componentDIdCatch에서 에러발생시 hasError:true로 설정하고 
본문에 this.state.hasError? 구문을 사용하면 에러가 있을떄와 없을떄로 대응할 수 있다
근데 이렇게되면 모든 컴포넌트에 hasError을 사용해야하기때문에 다음강의 Higher Order Component를 사용한다.

### 5 Error Boundaries with Higher Order Components
HOC는 Error Boundaries와 다르게 컴포넌트 자체를 넘겨받아 그 안에서 오류를 찾아냅니다. 이 때 HOC를 받을 변수를 렌더 해주면 되겠습니다.
App또한 HOC로 감쌀 수 있습니다.