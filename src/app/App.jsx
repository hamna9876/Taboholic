// import logo from './logo.svg';
import React,  {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import ExtendedPage from '../ExtendedPage/extendedPage';
import Popup from '../popup/popup';

//const isExtendedPage = false;
const rootId = "react-root";
// const rootId = isExtendedPage ? "react-extended" : "react-popup";
// const root = createRoot(document.getElementById("react-root")); 
// const switchRoot = createRoot(document.getElementById(rootId)); 
// console.log(root);

function App() {

  useEffect(() => {
    chrome.storage.local.get(["isExtendedPage"], (result) => {
      const { isExtendedPage } = result;
      const root = createRoot(document.getElementById(rootId));
      
      if (!isExtendedPage) {
        root.render(<ExtendedPage />);
      } else {
        root.render(<Popup />);
      }
    });
  }, []);

  return (
    
    <div className="App">
  
      <p> hello from app </p>
      {/* {isExtendedPage ? ( 
        switchRoot.render(<ExtendedPage />)
       ) : (
        switchRoot.render(<Popup />)
      )} */}

    </div>
  );
}

const root = createRoot(document.getElementById(rootId));
root.render(<App />);