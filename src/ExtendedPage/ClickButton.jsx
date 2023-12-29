import React from 'react';
import ExtendedPage from './extendedPage';

export default function ClickButton({buttonText})
{
    let num =0;
    const handleClick = () =>
    {
        num +=1;
        console.log(num);
        <ExtendedPage />
    }

    return <button onClick={handleClick}>{buttonText}</button>;
}