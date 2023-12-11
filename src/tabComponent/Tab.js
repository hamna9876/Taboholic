import React from 'react';
import './Tab.css';

export default function Tab({favIcon, url}) {
  return (
    <div className="Tab">
        <div className="favIcon" id="favIcon">
            <img src={favIcon} />
        </div>
        <div className="url" id="url">
            <label>{url} </label>
        </div>
    </div>
  );
}