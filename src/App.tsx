import React from 'react';
// import logo from './logo.svg';
import Background from './images/bg2.jpg';
import './App.css';
import Clock from './components/Clock'
import NotificationPanel from './components/NotificationPanel'
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
    return (
      <div className="App" onClick={() => this.showBackground()}>
        <div className="bg-solid" />
        <div className={this.state.showBackground ? 'bg-img bg-img-show': 'bg-img'}  style={{ backgroundImage: `url("${Background}")` }} />
        <div className='notification-panel-wrapper'> <NotificationPanel /> </div>
        <div className='clock-wrapper'> <Clock /> </div>
      </div>
    );
  }
}


export default App;
