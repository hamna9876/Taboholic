import React, { useEffect, useState} from 'react';
import Tab from '../tabComponent/Tab';

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
        <div className="TabList">
            {returnedTabs.map((tab, index) => (
                <Tab key={index} favIcon={tab.favIcon} url={tab.url} />
            ))}
        </div>
    );
}

