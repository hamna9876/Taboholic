import React from 'react';
import './Tab.css';

export default function App() {
  return (
    <div className="Tab">
        <div className="favIcon" id="favIcon">
            <label>favIcon:</label>
        </div>
        <div className="url" id="url">
            <label>Url:</label>
        </div>
    </div>
  );
}