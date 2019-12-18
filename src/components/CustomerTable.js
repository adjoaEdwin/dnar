import React from 'react'
import { Table, Button, Container, Image, Label } from 'semantic-ui-react'
import placeholder from '../assets/img/placeholder.png'

const color = "#718096";

function Customers() {
    return (
        <Container style={{ padding: '3em 2em' }}>
            <Table basic className="hide-for-small-only">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7'>Customers Activity</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell style={{ color }}>#</Table.Cell>
                        <Table.Cell style={{ color }}>Customer</Table.Cell>
                        <Table.Cell style={{ color }}>Service / Product</Table.Cell>
                        <Table.Cell style={{ color }}>Price</Table.Cell>
                        <Table.Cell style={{ color }}>Payment Method</Table.Cell>
                        <Table.Cell style={{ color }}>Status</Table.Cell>
                        <Table.Cell style={{ color }}></Table.Cell>

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell collapsing>
                            <Image src={placeholder} avatar /> Dan Nortey
                        </Table.Cell>
                        <Table.Cell>Uberx</Table.Cell>
                        <Table.Cell style={{ color: 'green' }}>15.00 ₵</Table.Cell>
                        <Table.Cell>MTN Mobile money</Table.Cell>
                        <Table.Cell>
                            <Button basic color='green' content='Successful' />
                        </Table.Cell>
                        <Table.Cell ><a href="/" style={{ color: '#fdb537' }}>View details</a></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{ color, backgroundColor: "none" }}>2</Table.Cell>
                        <Table.Cell collapsing>
                            <Image src={placeholder} avatar /> Gifty Thembi
                        </Table.Cell>
                        <Table.Cell>Uberx</Table.Cell>
                        <Table.Cell style={{ color: 'green' }}>15.00 ₵</Table.Cell>
                        <Table.Cell>Ghana Cedi</Table.Cell>
                        <Table.Cell>
                            <Button basic color='green' content='Successful' />
                        </Table.Cell>
                        <Table.Cell style={{ color: 'blue' }}><a href="/" style={{ color: '#fdb537' }}>View details</a></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{ color }}>3</Table.Cell>
                        <Table.Cell collapsing>
                            <Image src={placeholder} avatar /> Richard Sam
                        </Table.Cell>
                        <Table.Cell>Uberx</Table.Cell>
                        <Table.Cell style={{ color: 'green' }}>15.00 ₵</Table.Cell>
                        <Table.Cell>Ghana Cedi</Table.Cell>
                        <Table.Cell>
                            <Button basic color='green' content='Successful' />
                        </Table.Cell>
                        <Table.Cell style={{ color: 'blue' }}><a href="/" style={{ color: '#fdb537' }}>View details</a></Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='7'>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table >

            <div className="row show-for-small-only hidden">
                <div className="columns small-11 small-centered no-padding">
                    <h5 className="heading">Customers Activity</h5>

                    <div className="ui fluid card">
                        <div className="content">
                            <div className="description" style={{ display: "flex" }}>
                                <div className="left-floated" style={{ width: 190, overflowWrap: "break-word", position: "relative", top: 10, left: 10 }}>
                                    <a href="/"><b><p className="small-text"><Image src={placeholder} avatar />Dan Nortey</p></b></a>
                                    <p style={{ marginLeft: 20, paddingLeft: 10 }} className="small-text">Uberx</p>
                                    <span style={{ marginLeft: 20, paddingLeft: 10, color }} className="gray-text">MTN Mobile money</span>
                                </div>
                                <div>
                                    <p className="very-very-small-text">&nbsp;</p>
                                    <div style={{ position: "relative", bottom: 30, right: 16 }}>
                                        <Label basic color='green'>
                                            Successful
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="description" style={{ display: "flex" }}>
                                <div className="left-floated" style={{ width: 190, overflowWrap: "break-word", position: "relative", top: 10, left: 10 }}>
                                    <a href="/"><b><p className="small-text"><Image src={placeholder} avatar />Dan Nortey</p></b></a>
                                    <p style={{ marginLeft: 20, paddingLeft: 10 }} className="small-text">Uberx</p>
                                    <span style={{ marginLeft: 20, paddingLeft: 10, color }}>MTN Mobile money</span>
                                </div>
                                <div>
                                    <p className="very-very-small-text">&nbsp;</p>
                                    <div style={{ position: "relative", bottom: 30, right: 16 }}>
                                        <Label basic color='green'>
                                            Successful
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container >
    )
}

export default Customers;