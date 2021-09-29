import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

let rootElement = document.body.appendChild(document.createElement('div'));
rootElement.id = 'root';

async function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

render();

if (module.hot) {
  module.hot.accept('./app', () => render());
}
