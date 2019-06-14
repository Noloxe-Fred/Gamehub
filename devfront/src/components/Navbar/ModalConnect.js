import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Header,
  Modal,
  Form,
  Icon,
  Container,
  Divider,
  Checkbox
} from 'semantic-ui-react';



import './modalconnect.scss';

class ModalConnect extends Component {

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.props.changeInput(value, name);
  };

  handleCheck = (evt) => {
    this.props.checkRemember();
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
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <input
                  placeholder="Email"
                  name="connectPseudo"
                  onChange={this.handleChange}
                  value={connectPseudo}
                />
                <Icon className="user outline" />
                {/* mail outline */}
              </Form.Field>
              <Form.Field>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  name="connectPassword"
                  onChange={this.handleChange}
                  value={connectPassword}
                />
                <Icon className="eye" />
              </Form.Field>
              <Form.Field>
                <Checkbox name="remember" label="Se souvenir de moi" onChange={this.handleCheck} />
              </Form.Field>
              {!loadingConnect
                ? <Button type="submit">Se connecter</Button>
                : <Button loading>Loading</Button>
              }
              {errorMessage && <p>Erreur de connexion, veuillez vérifier vos informations.</p>}
            </Form>
          </Modal.Description>
        </Modal.Content>
        
      </Modal>
    ); 
  }
}


ModalConnect.propTypes = {
  changeInput: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  connectPassword: PropTypes.string.isRequired,
  connectPseudo: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  loadingConnect: PropTypes.bool.isRequired,
  openConnect: PropTypes.bool.isRequired,
  openModalConnect: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  checkRemember: PropTypes.func.isRequired,
};

export default ModalConnect;
