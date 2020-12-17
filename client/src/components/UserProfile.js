import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../src/App.css'
import avatar from "../images/avatar.jpg"
import Collapser from "../components/helper/Collapser"

const user = {
    name: 'Niklas L-B',
    location: 'København S',
    foodType: 'Pizza',
    age: 22,
    likes: 'Sleeping',
    linkedinUsername: 'niklaslb',
    avatar: avatar
};

const UserProfile = (props) => {

    const url = `linkedin.com/in/${user.linkedinUsername}`
    const { className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div>
            <Button color="secondary" onClick={toggle}>Profile</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <div className="user-deets">
                    <ModalHeader toggle={toggle}>Profile</ModalHeader>
                    <ModalBody>
                        <img src={user.avatar} alt={user.name} />

                        <h3>
                            <a href={url}>{user.name}</a>
                        </h3>

                        <p>
                            <strong>Location</strong> {user.location}
                        </p>
                        <p>
                            <strong>Eats</strong> {user.foodType}
                        </p>
                        <p>
                            <strong>Age</strong> {user.age}
                        </p>
                        <p>
                            <strong>Likes</strong> {user.likes}
                        </p>

                        <p>
                            <strong>LinkedIn</strong>{' '}
                            <a href={url}>@{user.linkedinUsername}</a>
                        </p>

                        {/* <ListGroup>
                            <ListGroupItem>Location: {user.location}</ListGroupItem>
                            <ListGroupItem>Favorite food: {user.foodType}</ListGroupItem>
                            <ListGroupItem>Age: {user.age}</ListGroupItem>
                            <ListGroupItem>Likes: {user.likes}</ListGroupItem>
                            <ListGroupItem>Twitter username: {user.twitterUsername}</ListGroupItem>
                            <img src={user.avatar} alt={user.name} />
                        </ListGroup> */}

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Update</Button>{' '}
                        <Collapser />
                    </ModalFooter>
                </div>
            </Modal>
        </div>
    );
}


export default UserProfile;
