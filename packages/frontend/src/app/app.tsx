import React from 'react';
import { appTheme } from './app.scss';
import WebsiteIcon from '../assets/icons/website.svg';

export class App extends React.Component {
  render() {
    return (
      <div className={appTheme}>
        <h1>
          <img
            src={WebsiteIcon}
            alt="Browser with address bar and body containing empty html tag"
          />
          Web Template
        </h1>
      </div>
    );
  }
}
