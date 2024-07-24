import { Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { User } from "../utils/interfaces/interfaces";

const ProfileComponent = () => {
    const location = useLocation();
    const { user } = location.state as { user: User } || { user: null }

    return (
        user !== null
            ?   <UserCard>
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
            :   <Navigate to={"/sso-login"} replace/>
    );
}

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

const StyledH2 = styled.h2`
    margin-top: 0;
`;

export default ProfileComponent;