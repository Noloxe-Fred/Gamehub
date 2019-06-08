import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';

import ModalConnect from 'src/containers/Navbar/ModalConnect';

export default class ModalSubscribe extends Component {

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.props.changeInput(value, name);
  };

  closeModal = () => {
    this.props.closeModal();
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.submitForm();
  }

	render() {

  const { subpseudo, subemail, subpassword, subconfirmpassword, confirmSubscribe  } = this.props;

  return (
    <Modal trigger={<button className="subscribeButton">S'inscrire</button>}>
      <Modal.Content>
        <Modal.Description>
            <Form onSubmit= {this.onSubmit}>
              <Form.Field>
                <label>Votre pseudo</label>
                <input
                name='subpseudo'
                placeholder='pseudo'
                onChange= {this.handleChange}
                value= {subpseudo}
                />
              </Form.Field>
              <Form.Field>
                <label>Votre email</label>
                <input 
                name='subemail'
                placeholder='email'
                onChange= {this.handleChange}
                value= {subemail}
                />
              </Form.Field>
              <Form.Field>
                <label>Votre mot de passe</label>
                <input
                name='subpassword'
                placeholder='mot de passe'
                onChange= {this.handleChange}
                value= {subpassword}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirmer votre mot de passe</label>
                <input
                name='subconfirmpassword'
                placeholder='mot de passe'
                onChange= {this.handleChange}
                value= {subconfirmpassword}
                />
              </Form.Field>
              {confirmSubscribe !== 'subscribeOk' && (
                <Button type='submit'>S'inscrire</Button>
              )}
              {confirmSubscribe === 'subscribeOk' && (
                <Modal.Content id="user-message">
                  <Modal.Description>Vous êtes bien inscrit, vous pouvez maintenant {<ModalConnect text="vous connecter" type="text" />}.</Modal.Description>
                </Modal.Content>
              )}
              {confirmSubscribe === 'subscribeError' && (
                <Modal.Content id="user-message">
                  <Modal.Description>Erreur lors de l'inscription. Contactez un administrateur ou faites une autre tentative</Modal.Description>
                  
                </Modal.Content>
              )}
              {confirmSubscribe === 'subscribeAlreadyExist' && (
                <Modal.Content id="user-message">
                  <Modal.Description>Cet e-mail correspond déjà à un utilisateur</Modal.Description>
                  
                </Modal.Content>
              )}
            </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
	}
}

ModalSubscribe.propTypes = {
  changeInput: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmSubscribe: PropTypes.string.isRequired,
  subconfirmpassword: PropTypes.string.isRequired,
  subemail: PropTypes.string.isRequired,
  subpassword: PropTypes.string.isRequired,
  subpseudo: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};
