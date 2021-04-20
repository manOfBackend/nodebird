import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';

import UserPorfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';


const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a><b>YesJong</b></a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton="Search" />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col md={1}></Col>
                <Col xs={24} md={5}>
                   {isLoggedIn ? <UserPorfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                    
                </Col>
                <Col xs={24} md={6}>
                    오른쪽 메뉴
                    <a href="https://www.google.com" target="_blank" rel="noreferrer noopener">Made by hyeonPaper</a>
                </Col>
            </Row>
        </div>
    );

};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default AppLayout;