import React, { useState, useEffect } from 'react';

//  ComponentA
const ComponentA = (props) => {
  const [num, setNum] = useState(5);

  const addNum = () => {
    setNum(num + 1);
  };

  const removeNum = () => {
    setNum(num - 1);
  };

  return (
    <div className=''>
      <h2>Component A</h2>
      <div className=''>
        <h2>Here is from Home {props.numHome}</h2>
        <h2>String : {props.strHome}</h2>
        <h2>Object : {props.objHome.obj.a}</h2>
        <div className=''>
          <h2> Function: {<props.funcHome />}</h2>
        </div>
      </div>
    </div>
  );
};

//  ComponentC
class ComponentC extends React.Component {
  constructor() {
    super();
    this.state = { myValue: 0 };
  }

  changeState(incrementor) {
    this.setState({ myValue: incrementor });
  }

  render() {
    const { myValue } = this.state;

    return (
      <>
        <h2>From C: {this.state.myValue}</h2>
        <button onClick={() => this.changeState(myValue + 2)}>add + 2</button>
        <button onClick={() => this.changeState(myValue - 2)}>remove - 2</button>
        <div className=''>
          <h1>From Home {this.props.numHome}</h1>
        </div>
      </>
    );
  }
}

//  Component Home
const Home = () => {
  const [num, setNum] = useState(5);
  const [num1, setNum1] = useState(5);

  useEffect(() => {
    console.log('When state is changed');
  }, [num]);

  return (
    <React.Fragment>
      {/* <button onClick={() => setNum(num + 1)}>add +</button>
      <button onClick={() => setNum(num - 1)}>remove -</button>
      <h2>Num: {num}</h2> */}
      {/* <ComponentA
        numHome={num}
        strHome={'here is string'}
        objHome={{
          obj: {
            a: 'home object from props',
          },
        }}
        funcHome={() => <div>function from Home</div>}
      /> */}
      <ComponentC numHome={num} />
    </React.Fragment>
  );
};

export default Home;
