import React, { Component } from 'react';
import { Drawer, Button, Menu} from 'antd';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTasks, faPhone } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {

    state = {
        current: '/',
        visible : false,
    }

    componentDidMount(){
        console.log(this.props.current)
    }

    handleClick = e => {
        this.setState({ current: this.props.current });
	};
	showDrawer = () => {
		this.setState({ visible: true });
	};
	onClose = () => {
		this.setState({ visible: false });
	};

    render(){
        return(
            <nav className="menuBar navbar-container">
                <div className="logo-navbar">
					<span className="font-medium">Vihermawan 👋</span>
                    {/* <ButtonToogle/> */}
				</div>
                <div className="menuCon">
					<div className="font-medium font-content rightMenu mr-20">
                        <Menu onClick={this.handleClick} selectedKeys={[this.props.current]} mode="horizontal">
                            <Menu.Item key="/">
                                <FontAwesomeIcon icon={faHome} />
                                <NavLink to="/">Home</NavLink> 
                            </Menu.Item>
                            <Menu.Item key="portofolio">
                                <FontAwesomeIcon icon={faTasks} />
                                <NavLink to="/portofolio">Portofolio</NavLink>
                            </Menu.Item>
                            <Menu.Item key="contact">
                                <FontAwesomeIcon icon={faPhone} />
                                <NavLink to="/contact">Contact</NavLink>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p><NavLink to='/'> Beranda </NavLink></p>
                    <p><a href="/event">Event</a></p>
                    <p><NavLink to='/login' className="text-black"> Masuk </NavLink></p>
                </Drawer>
            </nav>
        );
    }
}

export default Navbar;