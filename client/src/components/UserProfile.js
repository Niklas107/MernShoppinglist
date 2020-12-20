import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, Card, CardBody } from 'reactstrap';
import '../../src/App.css'
import avatar from "../images/avatar.jpg"

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

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => setIsOpen(!isOpen);

    const [name, setName] = useState(user.name);
    const [location, setLocation] = useState(user.location);
    const [foodType, setFoodType] = useState(user.foodType);
    const [age, setAge] = useState(user.age);
    const [likes, setLikes] = useState(user.likes);
    const [linkedinUsername, setLinkedinUsername] = useState(user.linkedinUsername);

    return (
        <div>
            <Button color="secondary" onClick={toggle}>Profile</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <div className="user-deets">
                    <ModalHeader toggle={toggle}>Profile</ModalHeader>
                    <ModalBody>
                        <div>
                            <img src={user.avatar} alt={user.name} />

                            <h3>
                                <a href={url}>{name}</a>
                            </h3>

                            <p>
                                <strong>Location</strong> {location}
                            </p>
                            <p>
                                <strong>Eats</strong> {foodType}
                            </p>
                            <p>
                                <strong>Age</strong> {age}
                            </p>
                            <p>
                                <strong>Likes</strong> {likes}
                            </p>

                            <p>
                                <strong>LinkedIn</strong>{' '}
                                <a href={url}>@{linkedinUsername}</a>
                            </p>
                        </div>

                        <div>
                            <Button color="primary" onClick={toggleCollapse}>Update profile</Button>
                            <Collapse isOpen={isOpen}>
                                <Card>
                                    <CardBody>
                                        <div>
                                            <h2 className="subtitle is-4">Update profile data</h2>
                                        </div>
                                        <div className="inputs">
                                            <div className="field">
                                                <label className="label">Name: </label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="field">
                                                <label className="label">Location:
                                </label>
                                                <input type="text"
                                                    className="input"
                                                    value={location}
                                                    onChange={e => setLocation(e.target.value)} />
                                            </div>
                                            <div className="field">
                                                <label className="label">FoodType: </label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={foodType}
                                                    onChange={e => setFoodType(e.target.value)}
                                                />
                                            </div>
                                            <div className="field">
                                                <label className="label">Age:
                                </label>
                                                <input type="number"
                                                    className="input"
                                                    value={age}
                                                    onChange={e => setAge(e.target.value)} />
                                            </div>
                                            <div className="field">
                                                <label className="label">Likes: </label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={likes}
                                                    onChange={e => setLikes(e.target.value)}
                                                />
                                            </div>
                                            <div className="field">
                                                <label className="label">LinkedIn: </label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    value={linkedinUsername}
                                                    onChange={e => setLinkedinUsername(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <Button color="primary" onClick={toggle}>Confirm</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Discard</Button>{' '}
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>



                    </ModalBody>
                    <ModalFooter>
                        <div><a>Something cool</a></div>
                    </ModalFooter>
                </div>
            </Modal>
        </div>
    );

}


export default UserProfile;
