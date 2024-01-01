import React,  {useState} from 'react';
import ExtendedPage from './extendedPage';

export default function ClickButton({buttonText})
{
    const [text, setText] = useState(<button>{buttonText}</button>);

    const changeState = () => {
        setText(<ExtendedPage />);
    }
    return <button onClick={changeState}>Click Me</button>;
}