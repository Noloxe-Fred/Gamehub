import React, { Component } from 'react';
import { Button, Modal, Form,Icon,Header } from 'semantic-ui-react';

import './ModalSubscribe.scss'



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
    <Modal classname="inscription" trigger={<button className="subscribeButton">S'inscrire</button>}>
      <Modal.Content>
      
        <Modal.Description>
        <Header>S'inscrire</Header>
            <Form onSubmit= {this.onSubmit}>
              <Form.Field>
              
                <input 
                placeholder='Votre pseudo'
                onChange= {this.handleChange}
                value= {subpseudo}
                />
                  <Icon className="user outline" />
              </Form.Field>
              <Form.Field>
                
                <input 
                placeholder='Votre email'
                onChange= {this.handleChange}
                value= {subemail}
                />
                <Icon className="mail outline" />
              </Form.Field>
              <Form.Field>
                
                <input 
                placeholder='Votre mot de passe'
                onChange= {this.handleChange}
                value= {subpassword}
                />
                <Icon className="eye" />
              </Form.Field>
              <Form.Field>
                
                <input 
                placeholder='Confirmer votre mot de passe'
                onChange= {this.handleChange}
                value= {subconfirmpassword}
                />
                <Icon className="eye" />
              </Form.Field>
              {confirmSubscribe === 'noSubscribtion' && (
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
                  <Button type='submit'>S'inscrire</Button>
                </Modal.Content>
              )}
              {confirmSubscribe === 'subscribeAlreadyExist' && (
                <Modal.Content id="user-message">
                  <Modal.Description>Cet e-mail correspond déjà à un utilisateur</Modal.Description>
                  <Button type='submit'>S'inscrire</Button>
                </Modal.Content>
              )}
            </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
	}
}
