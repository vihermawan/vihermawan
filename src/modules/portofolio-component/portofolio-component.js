import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../../common/layouts/navbar';

class PortofolioComponent extends Component {
    state = { 
        current : 'portofolio'
    }
    render() { 
        const { Content } = Layout;
        return ( 
            <Layout style={{backgroundColor:"white"}}>
                <Navbar 
                    current={this.state.current}
                />
                <Content className="landing-container pb-40" >
                    <Row className="section-container">
                        <Col lg={24} md={12} sm={12}>
                        sss
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
 
export default PortofolioComponent;