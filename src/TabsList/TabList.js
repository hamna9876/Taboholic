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

    const deleteTab = (id) => {
        setTabs(previousTabs => 
        {
            console.log(id);
            return previousTabs.filter(tab => tab.id !== id);
        })
    };

  
    return (
        <ul  className="TabList">
            {returnedTabs.map((tab) => {
               return <Tab onClick={() => deleteTab(tab.id)} {...tab} key={tab.id} />
            })}
        </ul>
    );
}

