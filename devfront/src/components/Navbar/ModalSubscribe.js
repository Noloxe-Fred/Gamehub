import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';


export default class ModalSubscribe extends Component {

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.props.changeInput(value, name);
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.submitForm();
  }

	render() {

  const { subfirstname, sublastname, subemail, subpassword, subconfirmpassword  } = this.props;

  return (
    <Modal trigger={<button className="subscribeButton">S'inscrire</button>}>
      <Modal.Content>
        <Modal.Description>
            <Form onSubmit= {this.onSubmit}>
              <Form.Field>
                <label>Votre nom</label>
                <input 
                placeholder='nom'
                onChange= {this.handleChange}
                value= {sublastname} 
                />
              </Form.Field>
              <Form.Field>
                <label>Votre prénom</label>
                <input 
                placeholder='email'
                onChange= {this.handleChange}
                value= {subfirstname}
                />
              </Form.Field>
              <Form.Field>
                <label>Votre email</label>
                <input 
                placeholder='email'
                onChange= {this.handleChange}
                value= {subemail}
                />
              </Form.Field>
              <Form.Field>
                <label>Votre mot de passe</label>
                <input 
                placeholder='mot de passe'
                onChange= {this.handleChange}
                value= {subpassword}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirmer votre mot de passe</label>
                <input 
                placeholder='mot de passe'
                onChange= {this.handleChange}
                value= {subconfirmpassword}
                />
              </Form.Field>
              <Button type='submit'>S'inscrire</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
	}
}
