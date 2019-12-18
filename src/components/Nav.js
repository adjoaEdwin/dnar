import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Container>
                <Menu pointing secondary className="hide-for-small-only" style={{ borderBottomWidth: 0 }}>
                    <Menu.Item
                        name='Dashboard'
                        active={activeItem === 'Dashboard'}
                        onClick={this.handleItemClick}
                        style={{ color: ' #fdb537', marginRight: "1.5em" }}
                    />
                    <Menu.Item
                        name='Transactions'
                        active={activeItem === 'Transactions'}
                        onClick={this.handleItemClick}
                        style={{ color: ' #fdb537', marginRight: "1.5em" }}

                    />
                    <Menu.Item
                        name='Customers'
                        active={activeItem === 'Customers'}
                        onClick={this.handleItemClick}
                        style={{ color: ' #fdb537', marginRight: "1.5em" }}

                    />
                    <Menu.Item
                        name='Account'
                        active={activeItem === 'Account'}
                        onClick={this.handleItemClick}
                        style={{ color: ' #fdb537', marginRight: "1.5em" }}

                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='lastLogin:'
                            active={activeItem === 'lastLogin'}
                            onClick={this.handleItemClick}
                            style={{ color: ' #fdb537', marginRight: "1.5em", fontSize: "0.8rem" }}

                        />
                    </Menu.Menu>
                </Menu>

                <Container fluid>
                    <Menu pointing secondary className="show-for-small-only" style={{ borderBottomWidth: 0 }}>
                        <Menu.Item
                            name='Dashoard'
                            active={activeItem === 'Dashoard'}
                            onClick={this.handleItemClick}
                            style={{ color: ' #fdb537', marginRight: "1.5em" }}
                        />
                        <Menu.Item
                            name='Transactions'
                            active={activeItem === 'Transactions'}
                            onClick={this.handleItemClick}
                            style={{ color: ' #fdb537', marginRight: "1.5em" }}

                        />
                        <Menu.Item
                            name='Customers'
                            active={activeItem === 'Customers'}
                            onClick={this.handleItemClick}
                            style={{ color: ' #fdb537', marginRight: "1.5em" }}

                        />
                        <Menu.Item
                            name='Account'
                            active={activeItem === 'Account'}
                            onClick={this.handleItemClick}
                            style={{ color: ' #fdb537', marginRight: "1.5em" }}

                        />
                    </Menu>
                </Container>
            </Container>
        )
    }
}