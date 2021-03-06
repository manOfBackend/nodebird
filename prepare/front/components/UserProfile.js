import React, { useCallback } from 'react';
import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {

    // const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(logoutAction());
    }, []);
    
    return (
        <>
            <Card
                actions={[
                    <div key="twit">짹짹<br />0</div>,
                    <div key="followings">팔로잉<br />0</div>,
                    <div key="followings">팔로워<br />0</div>,
                ]}
            >
                <Card.Meta
                    // avatar={<Avatar>{user.nickname[0]}</Avatar>}
                    // title={user.nickname}
                />
                <Button onClick={onLogout}>로그아웃</Button>
            </Card>
        </>
    );
}

export default UserProfile;