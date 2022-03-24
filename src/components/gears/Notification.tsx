import React from 'react';
import Icon from '@mdi/react';
import config from '../../common/config'

import './Notification.css';


export type P = {
  title: string;
  text: string;
  icon: string;
}

type S = {
}


class Notification extends React.Component<P, S> {

  render() {
    return (
      <div className="flex notification my-2">
        <div className="m-auto notification">
          <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
            <div className="flex flex-row">
              <div className="px-2">
              <Icon path={ this.props.icon } size={1} color={config.colors.primary} />
              </div>
              <div className="ml-2 mr-6">
                <span className="font-semibold">{ this.props.title }</span>
                <span className="block text-gray-500">{ this.props.text }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Notification;
