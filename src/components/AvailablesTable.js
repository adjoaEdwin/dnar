import React from 'react'
import { Table, Button, Container, Icon, Label } from 'semantic-ui-react'

const color = "#718096";

function Availables() {
    return (
        <Container style={{ padding: '0em 2em 2em' }}>
            <Table basic className="hide-for-small-only">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='7'>Available on dnar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell style={{ color }}>#</Table.Cell>
                        <Table.Cell style={{ color }}>Name</Table.Cell>
                        <Table.Cell style={{ color }}>Price</Table.Cell>
                        <Table.Cell style={{ color }}>Change</Table.Cell>
                        <Table.Cell style={{ color }}>Market cap.</Table.Cell>
                        <Table.Cell style={{ color }}>Chart</Table.Cell>
                        <Table.Cell style={{ color }}></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{ color }}>1</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon name='euro' size="large" /> Ghana Cedi <span>GC</span>
                        </Table.Cell>
                        <Table.Cell>Ghana Cedi</Table.Cell>
                        <Table.Cell style={{ color: 'green' }}>Ghana Cedi</Table.Cell>
                        <Table.Cell>Ghana Cedi</Table.Cell>
                        <Table.Cell>
                            <Button basic color='green' content='Successful' />
                        </Table.Cell>
                        <Table.Cell style={{ color: 'blue' }}><a href="/" style={{ color: '#fdb537' }}>View details</a></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell style={{ color }}>2</Table.Cell>
                        <Table.Cell collapsing>
                            <Icon name='bitcoin' size="large" /> Bitcoin <span>BTC</span>
                        </Table.Cell>
                        <Table.Cell>$11,233</Table.Cell>
                        <Table.Cell style={{ color: 'green' }}> +15.3%</Table.Cell>
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
                    <h5 className="heading">Available on dnar</h5>

                    <div className="ui fluid card">
                        <div className="content">
                            <div className="description" style={{ display: "flex" }}>
                                <div className="left-floated" style={{ width: 190, overflowWrap: "break-word", position: "relative", top: 10, left: 10 }}>
                                    <p className="small-text"><Icon name='euro' size="large" />Ghana Cedi <span>GC</span></p>
                                    <p style={{ marginLeft: 20, paddingLeft: 10 }} className="small-text">Ghana Cedi</p>
                                </div>
                                <div>
                                    <p className="very-very-small-text">&nbsp;</p>
                                    <div style={{ position: "relative", bottom: 30, right: 16 }}>
                                        <Label basic color='green'>
                                            Ghana Cedi
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="description" style={{ display: "flex" }}>
                                <div className="left-floated" style={{ width: 190, overflowWrap: "break-word", position: "relative", top: 10, left: 10 }}>
                                    <p className="small-text"><Icon name='bitcoin' size="large" /> Bitcoin BTC</p>
                                    <p style={{ marginLeft: 20, paddingLeft: 10 }} className="small-text">$11,233</p>
                                </div>
                                <div>
                                    <p className="very-very-small-text">&nbsp;</p>
                                    <div style={{ position: "relative", bottom: 30, right: 16 }}>
                                        <Label basic color='green'>
                                            +15.3%
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>

    )
}

export default Availables;