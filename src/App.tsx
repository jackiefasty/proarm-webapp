import React from 'react';
// import logo from './logo.svg';
import Background from './images/bg3.jpg';
import './App.css';
import Clock from './components/Clock'

type S = {
  showBackground: boolean
}


class App extends React.Component<{}, S> {

  constructor(props: {}) {
    super(props);

    this.state = { showBackground: false };
  }

  private readonly bgTimeout: NodeJS.Timer | null = null;
  showBackground() {
    if (this.bgTimeout)
      clearTimeout(this.bgTimeout);

    this.setState({ showBackground: true });

    setTimeout(() => {
      this.setState({ showBackground: false });
    }, 20000);
  }

  render() {
    return <div className="App" onClick={() => this.showBackground()}>
      <div className="bg bg-solid" />
      <img src={Background} className={this.state.showBackground ? 'bg bg-img bg-img-show': 'bg bg-img'} alt='background'/>
    {/* <header className="App-header">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Dio porco <code>src/App.tsx</code> and save to reload {this.state.date.toLocaleTimeString()}.</p>
    </header> */}
    <div></div>
    <Clock />
  </div>;
  }
}


export default App;
