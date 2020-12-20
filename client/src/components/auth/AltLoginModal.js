import React, { Component, useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    NavLink,
    FormGroup,
    Form,
    Input,
    Button
} from 'reactstrap';






class AltLoginModal extends Component {
    App() {
        const [phrase, setPhrase] = useState('');

        if (phrase === 'open sesame') {
            alert('You may pass!');
        }
    }
    state = {
        modal: false,
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    onSubmit = (e) => {
        e.preventDefault();
        //Close modal
        this.toggle();
    };
    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">Alternative Login</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Alternative Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <div className="App">
                                    <h2>What's the secret phrase?</h2>
                                    <Input
                                        type="text"
                                        value={this.phrase}
                                        onChange={e => this.setPhrase(e.target.value)}
                                        placeholder="Super duper secret"
                                    />
                                    <p>
                                        Hint: It's <strong>open sesame</strong>
                                    </p>
                                </div>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}





export default AltLoginModal;