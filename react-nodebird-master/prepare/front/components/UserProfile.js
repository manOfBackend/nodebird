import { Button, Avatar, Card } from "antd";
import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {

    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);


    return (

        <Card actions={[
            <div key="twit">짹쨱<br />0</div>,
            <div key="followings">팔로잉<br />0</div>,
            <div key>팔로워<br />0</div>,
        ]}>
            <Card.Meta
                avatar={<Avatar>HJ</Avatar>}
                title="HyeonPaper"
            />

            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>

    )
}

export default UserProfile;