import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import avatar from "../../images/avatar.jpg"

const user = {
    name: 'Niklas L-B',
    location: 'København S',
    foodType: 'Pizza',
    age: 22,
    likes: 'Sleeping',
    linkedinUsername: 'niklaslb',
    avatar: avatar
};

const Collapser = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [name, setName] = useState(user.name);
    const [location, setLocation] = useState(user.location);
    const [foodType, setFoodType] = useState(user.foodType);
    const [age, setAge] = useState(user.age);
    const [likes, setLikes] = useState(user.likes);
    const [linkedinUsername, setLinkedinUsername] = useState(user.linkedinUsername);

    return (
        <div>
            <Button color="primary" onClick={toggle}>Toggle</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <div>
                            <h2 className="subtitle is-4">Update profile data</h2>
                        </div>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default Collapser;