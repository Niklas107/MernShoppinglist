import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    number: '',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  //   itemChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   numberChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  itemChange = (e) => {
    const name = e.target.value;
    this.setState({ name: name });
  };

  numberChange = (e) => {
    const number = e.target.value;
    this.setState({ number: number });
  };

  onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // if (this.state.name == '') {
    //   alert(`Can't have an item count without an item`);
    //   return
    // }

    // if (this.state.number == '') {
    //   console.log(`No item count was selected`);
    //   return;
    // }

    //Old
    const newItem = {
      name: this.state.name,
      number: this.state.number,
    };

    //New
    // const newItem = ({ name, number } = this.state);

    //Add item via addItem action
    this.props.addItem(newItem);
    // console.log(`Item: ${name} x ${number} added`);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Add item
          </Button>
        ) : (
            <h4 className="mb-3 ml-4">Please log in to manage items</h4>
          )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <Label for="number">Count</Label>
                <Input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Item count"
                  value={this.state.number}
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
