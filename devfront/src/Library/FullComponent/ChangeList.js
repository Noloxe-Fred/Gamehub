import React from 'react';

import './changelist.scss';

import { Header, Popup, Button } from 'semantic-ui-react';

const ChangeList = ({ statusId, changeList }) => { 

  const handleChange = () => {
    changeList('have', statusId)
  };

  const stylePopup = {
    opacity: 0.8,
    textAlign: 'center',
  };

  return (
    <div className="change--list">
      <Popup trigger={<i className="fas fa-arrow-alt-circle-left" />} flowing hoverable inverted style={stylePopup}>
        <Header>Envoyer vers la liste:</Header>
        <Button onClick={handleChange}>Je l'ai</Button>
      </Popup>
    </div>
)};

export default ChangeList;
