import React,  {useState} from 'react';
import ExtendedPage from './extendedPage';

export default function ClickButton({buttonText})
{
    const [text, setText] = useState(<button>{buttonText}</button>);

    const changeState = () => {
        // setText(<ExtendedPage />);

        console.log("button test");
        chrome.tabs.create({ 
            // url: "./extendedPage.html"
        })
        console.log("test");

        //needs to trigger a new tab.
    }
    return <button onClick={changeState}>{buttonText}</button>;
}