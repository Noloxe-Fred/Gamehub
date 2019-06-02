import React, { Component } from 'react';
import { Button, Header, Modal, Form } from 'semantic-ui-react';

class ModalConnect extends Component {

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.props.changeInput(value, name);
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.submitForm();
  }

  render() {

    const { connectPseudo, connectPassword } = this.props;

    return (
  <Modal trigger={<button className="connectButton">Se connecter</button>}>
    <Modal.Content>
      <Modal.Description>
        <Header>Se connecter</Header>
        <Form onSubmit= {this.onSubmit}>
          <Form.Field>
            <label>Votre pseudo</label>
            <input 
              placeholder='pseudo'
              name='connectPseudo'
              onChange= {this.handleChange}
              value= {connectPseudo}
            />
          </Form.Field>
          <Form.Field>
            <label>Votre mot de passe</label>
            <input
              placeholder='mot de passe'
              name='connectPassword'
              onChange={this.handleChange}
              value={connectPassword}
            />
          </Form.Field>
          <Button type='submit' basic color='green'>Se connecter</Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    )
  } 
};

export default ModalConnect;
