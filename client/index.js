import React from 'react';
import App from './App.jsx';
import { render } from 'react-dom';
import {createRoot} from 'react-dom/client';

// uncomment so that webpack can bundle styles
// import styles from '../scss/_styles.scss';
import styles from '../styles.css';

const root = createRoot(document.getElementById('app'));

root.render(
  <App />
);

// ReactDOM.render(<App />, document.getElementById('app'));



// const produceSchema = new mongoose.Schema({
//   name: { type: String, require: true },
//   quantity: { type: Number, require: true },
//   dateAdded: { type: Date, default: Date.now },
//   expireDate: { type: Number, require: true },
// });

// const Produce = mongoose.model('produces', produceSchema);