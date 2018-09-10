import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
