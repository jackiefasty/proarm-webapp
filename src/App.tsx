import React from 'react';
// import logo from './logo.svg';
// import Background from './images/bg3.jpg';
import './App.css';
import Clock from './components/Clock'
import Music from './components/Music'

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
      <img src='https://picsum.photos/1920/1080' className={this.state.showBackground ? 'bg bg-img bg-img-show': 'bg bg-img'} alt='background'/>
    <div></div>
    <Music />
  </div>;
  }
}


export default App;
