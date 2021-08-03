import React, { useState } from 'react';

const ComponentA = () => {
  const [num, setNum] = useState(5);

  const addNum = () => {
    setNum(num + 1);
  };

  const removeNum = () => {
    setNum(num - 1);
  };

  return (
    <React.Fragment>
      <h2>From Component A</h2>
      <button onClick={addNum}>add +</button>
      <button onClick={removeNum}>remove -</button>
      <h4>Num: {num}</h4>
      <ComponentC />
    </React.Fragment>
  );
};

class ComponentC extends React.Component {
  state = {
    myValue: 10,
  };

  changeState(increment) {
    // this.changeState({
    //   myValue: increment,
    // });
    console.log(increment);
  }

  render() {
    return (
      <>
        <h1>From C</h1>
        <button onClick={() => this.changeState(this.state.myValue + 2)}>add + 2</button>
        <h2>{this.state.myValue}</h2>
      </>
    );
  }
}

const Home = () => {
  return (
    <React.Fragment>
      <h1>Hello World </h1>
      <ComponentA />
    </React.Fragment>
  );
};

export default Home;
