import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Icon, Header } from 'semantic-ui-react';

import ModalConnect from 'src/components/Navbar/ModalConnect';
import './ModalSubscribe.scss';

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

  const { subpseudo, subemail, subpassword, subconfirmpassword, confirmSubscribe, openModSub, openSubscribe, closeModSub  } = this.props;

  return (
    <Modal className="inscription" trigger={<button className="subscribeButton" onClick={openModSub}>S'inscrire</button>} open={openSubscribe} onClose={closeModSub}>
      <Modal.Content>
        <Modal.Description>
        <Header><i class="fas fa-dot-circle"></i><h3>INSCRIPTION</h3><i class="fas fa-dot-circle"></i></Header>
            <Form onSubmit= {this.onSubmit}>
              <Form.Field>
                <input
                name='subpseudo'
                placeholder='Votre pseudo'
                onChange= {this.handleChange}
                value= {subpseudo}
                />
                  <Icon className="user outline" />
              </Form.Field>
              <Form.Field>
                <input 
                placeholder='Votre email'
                name='subemail'
                onChange= {this.handleChange}
                value= {subemail}
                />
                <Icon className="mail outline" />
              </Form.Field>
              <Form.Field>             
                <input 
                type="password"
                placeholder='Votre mot de passe'
                name='subpassword'
                onChange= {this.handleChange}
                value= {subpassword}
                />
                <Icon className="eye" />
              </Form.Field>
              <Form.Field>
                <input 
                type="password"
                placeholder='Confirmer votre mot de passe'
                name='subconfirmpassword'
                onChange= {this.handleChange}
                value= {subconfirmpassword}
                />
                <Icon className="eye" />
              </Form.Field>
              <p className="password--auth">(Votre mot de passe doit contenir une majuscule, une minuscule, chiffre et avoir au moins 5 caractères)</p>
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
