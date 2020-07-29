import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../../common/layouts/navbar';
import '../../assets/scss/home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

class HomeComponent extends Component {
    state = { 
        current : "/"
    }
    render() { 
        const { Content } = Layout;
        const image1 = require(`../../assets/svg/profile.svg`);
        return ( 
            <Layout style={{backgroundColor:"white"}}>
                <Navbar
                    current={this.state.current}
                />
                <Content className="landing-container pb-40" > 
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="font-content font-bold black ">WORKAHOLIC PERSON</span>
                                        <br/>
                                        <span className="font-title font-bold white title-desc">Vicky Hermawan</span>
                                    </div>
                                </Col>
                                <Col span={24}> 
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>     
                                    <div className="description-container">
                                        <span className="font-title-content font-light black">Workaholic Person -- Vihermawan's is containing my portfolio, work, hobby and about my self. Learners, do something to get a new thing, like code, design, and sometimes do a photograph. Interest in front-end development. </span>
                                    </div>                             
                                </Col>
                                <Col span={24}> 
                                    <div className="icon-container">
                                        <span className="font-title-icon black"> 
                                            <FontAwesomeIcon icon={faGithub} /> 
                                            <FontAwesomeIcon icon={faLinkedin} className="ml-20"/>  
                                            <FontAwesomeIcon icon={faInstagram} className="ml-20"/>  
                                            <FontAwesomeIcon icon={faTwitter} className="ml-20"/>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{width: '65%',marginLeft:'20%'}}
                                />
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>    
        );
    }
}
 
export default HomeComponent;