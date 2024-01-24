import React, { useEffect, useState} from 'react';
import Tab from '../tabComponent/Tab';
import './TabList.css';

export default function TabList() {
    const [returnedTabs, setTabs] = useState([]);

    useEffect(() => 
    {
        chrome.storage.local.get(["returnedTabs"], (result) => 
        {
            const {returnedTabs} = result;
            setTabs(returnedTabs || []);
        })
    }, [returnedTabs]);

    
    return (
        <ul className="TabList">
            {returnedTabs.map((tab) => {
               return <Tab {...tab} key={tab.id} />
            })}
        </ul>
    );
}

