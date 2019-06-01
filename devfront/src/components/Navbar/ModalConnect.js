import React, { Component } from 'react';
import { Button, Header, Modal, Form } from 'semantic-ui-react';


class ModalConnect extends Component {
  render () {
    return (
  <Modal trigger={<button className="connectButton">Se connecter</button>}>
    <Modal.Content>
      <Modal.Description>
        <Header>Se connecter</Header>
        <Form>
          <Form.Field>
            <label>Votre pseudo</label>
            <input placeholder='pseudo' />
          </Form.Field>
          <Form.Field>
            <label>Votre email</label>
            <input placeholder='email' />
          </Form.Field>
          <Form.Field>
            <label>Votre mot de passe</label>
            <input placeholder='mot de passe' />
          </Form.Field>
          <Form.Field>
            <label>Confirmer votre mot de passe</label>
            <input placeholder='mot de passe' />
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
