import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
let rootElement = document.body.appendChild(document.createElement('div'));
rootElement.id = 'root';
async function render() {
    ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(App, {}, void 0) }, void 0), rootElement);
}
render();
if (module.hot) {
    module.hot.accept('./app', () => render());
}
//# sourceMappingURL=index.js.map