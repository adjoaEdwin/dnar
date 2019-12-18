import React from 'react'
import { Container, Card, } from 'semantic-ui-react'


function Body() {
    return (
        <Container style={{ padding: '2em 2em' }}>
            <Container style={{ paddingBottom: '3em' }} className="hide-for-small-only">
                <h2>Dashboard</h2>
                <p>
                    Welcome Kwesi Enim
                </p>
            </Container>

            <Container className="hide-for-small-only">
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Description>Total</Card.Description>
                            <Card.Description><p>Customers</p></Card.Description>
                            <Card.Header>
                                <p style={{ textAlign: 'right', fontSize: 30 }}>787</p>
                            </Card.Header>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Description>Total</Card.Description>
                            <Card.Description><p>Transactions</p></Card.Description>
                            <Card.Header>
                                <p style={{ textAlign: 'right', fontSize: 30 }}>1,234525 ₵ </p>
                            </Card.Header>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Description>Total</Card.Description>
                            <Card.Description><p>Commission</p></Card.Description>
                            <Card.Header>
                                <p style={{ textAlign: 'right', fontSize: 30 }}>54.89018319 ₵ </p>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Container>

            <div className="show-for-small-only" style={{ paddingBottom: '1em' }}>
                <h2>Dashboard</h2>
                <p>
                    Welcome Kwesi Enim
                </p>
            </div>

            <div className="row show-for-small-only">
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Description>Total</Card.Description>
                            <Card.Description><p>Customers</p></Card.Description>
                            <Card.Header>
                                <p style={{ textAlign: 'right', fontSize: 30 }}>787</p>
                            </Card.Header>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Description>Total</Card.Description>
                            <Card.Description><p>Transactions</p></Card.Description>
                            <Card.Header>
                                <p style={{ textAlign: 'right', fontSize: 30 }}>1,234525 ₵ </p>
                            </Card.Header>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Description>Total</Card.Description>
                            <Card.Description><p>Commission</p></Card.Description>
                            <Card.Header>
                                <p style={{ textAlign: 'right', fontSize: 30 }}>54.89018319 ₵ </p>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>

        </Container>
    )
}

export default Body;