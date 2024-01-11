import React,  {useState} from 'react';
import ExtendedPage from './extendedPage';

export default function ClickButton({buttonText})
{
    const [text, setText] = useState(<button>{buttonText}</button>);

    const changeState = () => {
        // setText(<ExtendedPage />);
        chrome.storage.local.set({isExtendedPage : true}, ()=> {
            console.log("button test");
            chrome.tabs.create({ 
                url: "./app.html"
            })
        });
      //  console.log(isExtendedPage);
     
        console.log("test");
        //set the variable to true
        //needs to trigger a new tab.
    }
    return <button onClick={changeState}>{buttonText}</button>;
}