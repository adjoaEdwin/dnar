import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/logo2.png'




function Header() {
    return (
        <Container fluid style={{ backgroundColor: '#f5c955' }}>
            <Container>
                <Menu secondary className="hide-for-small-only">
                    <Menu.Item>
                        <Image src={logo} alt="dnar logo" />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item style={{ display: "flex" }}>
                            <FontAwesomeIcon icon={faBell} style={{ color: 'white', marginRight: 30 }} />
                            <div style={{ display: "flex", flexDirection: "column", color: "white", marginRight: 13 }}>
                                <span className="profile-text">Kwesi Anim</span>
                                <span className="small-text">Uber x</span>
                            </div>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>

            <Container>
                <Menu secondary className="show-for-small-only">
                    <Menu.Item>
                        <Image src={logo} style={{ width: 50 }} alt="dnar logo" />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <FontAwesomeIcon icon={faBell} style={{ color: 'white' }} />
                        </Menu.Item>

                        <Menu.Item style={{ display: "inline-flex", color: "white", flexDirection: "column", textAlign: "left", justifyContent: "flex-start", alignContent: "flex-start" }}>
                            <span style={{ marginBottom: 2, fontSize: 12, width: 50 }}>Kwesi Anim</span>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </Container>
    )
}

export default Header;