import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Collapser = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [name, setName] = useState("Test");
    const [age, setAge] = useState("10");

    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <div className="inputs">
                            <div className="field">
                                <label className="label">Age:
                                </label>
                                <input type="number"
                                    className="input"
                                    placeholder="20"
                                    value={age}
                                    onChange={e => setAge(e.target.value)} />
                            </div>
                            <div className="field">
                                <label className="label">Name: </label>
                                <input
                                    className="input"
                                    type="text"
                                    value={name}
                                    placeholder="William"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default Collapser;