import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { User } from '../../utils/interfaces/interfaces';

interface GoogleAuthProps {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
}

const saveToLocalStorage = (itemName: string, value: User) => {
    localStorage.setItem(itemName, JSON.stringify(value));
};

const GoogleAuth = ({
    setUser
}: GoogleAuthProps) => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    return (
        <AuthContainer>
            <LoginText>Login with Google</LoginText>

            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={ async (credentialResponse) => {
                        const { credential } = credentialResponse;

                        const response = await fetch('http://localhost:5000/google-auth', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                credential,
                                client_id: clientId
                            })
                        });
                        const data = await response.json();
                        saveToLocalStorage('user', data);
                        setUser(data);
                    }}
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