// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './App.css';
import ExtendedPage from '../ExtendedPage/extendedPage';
import Popup from '../popup/popup';

const isExtendedPage = false;
const rootId = isExtendedPage ? "react-extended" : "react-popup";
const root = createRoot(document.getElementById(rootId)); 

function App() {
  return (
    <div className="App">
      <p>hello from app</p>
      {isExtendedPage ? (
        ReactDOM.render(<ExtendedPage />, document.getElementById("react-extended"))
       ) : (
        ReactDOM.render(<Popup />, document.getElementById("react-popup"))
      )}
    </div>
  );
}

root.render(<App />);