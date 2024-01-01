// PanelPage.jsx
import React from 'react';
import './PanelPage.css';

const PanelPage = () => {
  return (
    <div>
      <h2>Panel Page</h2>
      <div className="panelPage">
        <div className="panel">
        <img src='public/vite.svg' alt="Panel Image is React logo" className='PanelImg'/>
          <p>Text content1 in the panel</p>
        </div>
        <div className="panel">
          <img src='public/vite.svg' alt="Panel Image is React logo" className='PanelImg'/>
          <p>Text content2 in the panel</p>
        </div>
      </div>
      

      
    </div>

  );
};

export default PanelPage;
