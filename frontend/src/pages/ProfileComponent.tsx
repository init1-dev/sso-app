import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { User } from "../utils/interfaces/interfaces";
import { useState } from "react";
import { handleLogoutSuccess } from "../utils/functions/functionsModule";

const ProfileComponent = () => {
    const persistentUser = localStorage.getItem('user');
    const parsedUser: User = persistentUser ? JSON.parse(persistentUser) : null;
    const [ user, setUser ] = useState<User | null>(parsedUser);

    return (
        user !== null
            ?   <ProfileContainer>
                    <UserCard>
                        <StyledH2>User details:</StyledH2>

                        <p>Profile image:</p>

                        <img src={user.picture} alt={user.name} />

                        <p>Name: 
                            <strong> {user.name}</strong>
                        </p>

                        <p>email: 
                            <strong> {user.email}</strong>
                        </p>
                        <p>id: 
                            <strong> {user.id}</strong>
                        </p>
                    </UserCard>

                    <Button onClick={() => handleLogoutSuccess(setUser)}>
                        Logout
                    </Button>
                </ProfileContainer>
            :   <Navigate to={"/sso-login"} replace/>
    );
}

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const UserCard = styled.div`
    background-color: white;
    color: black;
    padding: 1rem;
    border: 1px solid grey;
    width: fit-content;
    margin: 0 auto;
    border-radius: 0.5rem;

    img {
        border: 1px solid black;
    }
`;

const Button = styled.button`
    &:hover {
        border: 1px solid rgba(159, 204, 216, 0.5);
    }
`;

const StyledH2 = styled.h2`
    margin-top: 0;
`;

export default ProfileComponent;