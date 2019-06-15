import React from 'react';
import { Input, Form, Icon } from 'semantic-ui-react';

const SearchBar = ({ inputValue, changeInput, submitSearch }) => {
  
  const handleChange = (evt) => {
    changeInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    console.log(evt);
    evt.preventDefault();
    submitSearch();
  };

  return (
    <Form onSubmit={handleSubmit} className="searchBar">
      <Input
        icon={<Icon name="search" link color="yellow" />}
        placeholder="Rechercher un jeu"
        value={inputValue}
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar; 
