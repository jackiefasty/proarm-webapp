import React from 'react';
import './NotificationPanel.css';
import Notification, { P as NotificationProps } from './gears/Notification'
import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiMenuUp, mdiMenuRight } from '@mdi/js';
import config from '../common/config'

type S = {
  notifications: NotificationProps[];
  closed: boolean;
}


class NotificationPanel extends React.Component<{}, S> {

  constructor(props: {}) {
    super(props);

    this.state = { notifications: [], closed: true }
  }

  private addNotificationInterval: NodeJS.Timer | null = null;
  componentDidMount() {
    this.addNotificationInterval = setInterval(() => {
      this.setState((prevState) => ({
        notifications: [...prevState.notifications, this.getNotification()]
      }));
    }, 3000);
  }

  componentWillUnmount() {
    if (this.addNotificationInterval)
      clearInterval(this.addNotificationInterval);
  }

  getNotification(): NotificationProps {
    return {
      icon: mdiAccount,
      title:'Message from John',
      text:'Hej, how are you'
    }
  }

  close() {
    this.setState({closed: !this.state.closed})
  }
  
  render() {
    return (
      <div className={this.state.closed ? 'notifications-page closed': 'notifications-page'}>
        <div className='header text-white'>
          Notifications <div className='notification-counter'>{ this.state.notifications.length }</div>
        </div>
        <div className='notification-list'>
          {this.state.notifications.map((n, i) => (
            <Notification
              key={i}
              title='Message from John'
              text='Hej, how are you?'
              icon={mdiAccount}
            />
            ))}
        </div>
        <div className='close-notifications' onClick={ () => this.close() }>
          <Icon path={ this.state.closed ? mdiMenuRight : mdiMenuUp } size={1} color={config.colors.primary} ></Icon>
        </div>
      </div>
    );
  }
}


export default NotificationPanel;
