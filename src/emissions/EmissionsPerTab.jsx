import React from 'react';
import { useEffect, useState } from 'react';

export default function EmissionsPerTab({url}) {
    const [EmissionPerTab, setEmissionPerTab] = useState(null);

    useEffect(async() => {
        const reqestURL = 'https://api.websitecarbon.com/site?url=' + url;
        const response = await fetch(reqestURL);
        const data = await response.json();
        setEmissionPerTab(data.rating);
    }, []);

    return (
        <div className="EmissionsPerTab">
            <p> emission rating: {EmissionPerTab} </p>
        </div>
    );
}

//pass in the url as prop and then substitute when rendering the whole list