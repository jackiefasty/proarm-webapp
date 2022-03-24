import React from 'react';
import './NotificationPanel.css';
import Notification, { P as NotificationProps } from './gears/Notification'
import { mdiAccount } from '@mdi/js';

type S = {
  notifications: NotificationProps[];
}


class NotificationPanel extends React.Component<{}, S> {

  constructor(props: {}) {
    super(props);

    this.state = { notifications: [] }
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

  render() {
    return (
      <div>
        <div className='header px-10 pt-3 text-white'>
          Notification
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
      </div>
    );
  }
}


export default NotificationPanel;
