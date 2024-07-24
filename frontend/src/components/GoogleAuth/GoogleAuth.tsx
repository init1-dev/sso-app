import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { handleLoginSuccess } from '../../utils/functions/functionsModule';

interface GoogleAuthProps {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
}

const GoogleAuth = ({
    setUser
}: GoogleAuthProps) => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    return (
        <AuthContainer>
            <LoginText>Login with Google</LoginText>

            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => handleLoginSuccess(credentialResponse, clientId, setUser)}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </AuthContainer>
    );
};

const AuthContainer = styled.div`
    display: flex;
    background-color: white;
    color: black;
    width: fit-content;
    margin: 0 auto;
    padding: 1.5rem 2rem 2rem 2rem;
    border-radius: 0.5rem;
    gap: 1rem;
    border: 1px solid grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(1px 1px 5px rgb(0 0 0 / 0.2));
    transition: filter 0.3s ease;

    &:hover {
        filter: drop-shadow(1px 1px 10px rgba(159, 204, 216, 0.5));
    }
`;

const LoginText = styled.h2`
    margin: unset;
`;

export default GoogleAuth;