import React, { Component } from 'react';
import {
  Button,
  Header,
  Modal,
  Form,
  Icon,
  Container,
  Divider,
} from 'semantic-ui-react';

// Icones Semantic UI React
// https://react.semantic-ui.com/elements/icon/

import './modalconnect.scss';

class ModalConnect extends Component {

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.props.changeInput(value, name);
  };

  openModalConnect = () => {
    this.props.openModalConnect();
  };

  closeModal = () => {
    this.props.closeModal();
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.submitForm();
  }
 
  render() {
    const {
      connectPseudo,
      connectPassword,
      text,
      openConnect,
      loadingConnect,
      errorMessage,
    } = this.props;
    return (
      
      <Modal className="modalConnect" trigger={<button className="connectButton" onClick={this.openModalConnect}>{text}</button>} open={openConnect} onClose={this.closeModal} >
        
        <Modal.Content>
          <Modal.Description>
            <Header>Se connecter</Header>
            {/* {errorMessage && <Modal.Descritpion>Erreur d'authentification</Modal.Descritpion>} */}
            <Form onSubmit= {this.onSubmit}>
              <Form.Field>
                <input
                  placeholder="Email..."
                  name="connectPseudo"
                  onChange={this.handleChange}
                  value={connectPseudo}
                />
                <Icon className="user outline" />
                {/* mail outline */}
              </Form.Field>
              <Form.Field>
                <input
                  placeholder="Mot de passe..."
                  name="connectPassword"
                  onChange={this.handleChange}
                  value={connectPassword}
                />
                <Icon className="eye" />
              </Form.Field>
              {!loadingConnect
                ? <Button type="submit">Se connecter</Button>
                : <Button loading>Loading</Button>
              }
            </Form>
          </Modal.Description>
        </Modal.Content>
        
      </Modal>
      
    );
    
  }
};

export default ModalConnect;
