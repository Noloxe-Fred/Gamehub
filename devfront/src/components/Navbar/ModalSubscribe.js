import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';


export default class ModalSubscribe extends Component {

	render() {

		return (

			<Modal trigger={<button className="subscribeButton">S'inscrire</button>}>
				<Modal.Content>
					<Modal.Description>
							<Form>
								<Form.Field>
									<label>Votre nom</label>
									<input placeholder='nom' />
								</Form.Field>
								<Form.Field>
									<label>Votre prénom</label>
									<input placeholder='email' />
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
								<Button type='submit'>S'inscrire</Button>
						</Form>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}
}
