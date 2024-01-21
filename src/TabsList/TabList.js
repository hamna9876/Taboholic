import React, { useEffect, useState} from 'react';
import Tab from '../tabComponent/Tab';
import './TabList.css';

export default function TabList({isExtenedPage}) {
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
                id={tab.id}
                title = {tab.title} 
                url={isExtenedPage ? tab.url : null}
                favIcon={tab.favIcon} 
                key={tab.id} 
                isExtendedPage={isExtenedPage}
                /> ))
            }
        </ul>
    );
}

