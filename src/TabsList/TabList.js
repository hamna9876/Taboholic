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
    }, []);

  
    return (
        <ul  className="TabList">
            {returnedTabs.map((tab) => (
                <Tab 
                    key={tab.id} 
                    favIcon={tab.favIcon} 
                    url={tab.url} 
                />
            ))}
        </ul>
    );
}

