import { Navigate } from "react-router-dom";
import styled from "styled-components";
import reactLogo from '../assets/react.svg'
import googleLogo from '../assets/google.svg'
import dockerLogo from '../assets/docker.svg'
import nginxLogo from '../assets/nginx.svg'
import viteLogo from '/vite.svg'
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import { useState } from "react";
import { User } from "../utils/interfaces/interfaces";

const MainPage = () => {
    const persistentUser = localStorage.getItem('user');
    const parsedUser: User = persistentUser ? JSON.parse(persistentUser) : null;
    const [ user, setUser ] = useState<User | null>(parsedUser);

    return (
        <AppContainer>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://developers.google.com/identity/authentication" target="_blank">
                    <img src={googleLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://docs.docker.com/compose/" target="_blank">
                    <img src={dockerLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://hub.docker.com/_/nginx" target="_blank">
                    <img src={nginxLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <div>
                <TitleContainer>
                    <h1>SSO Auth with Google</h1>
                    <h3>Main technologies: React, Node.js, Docker and Nginx</h3>
                </TitleContainer>

                {   !user
                        ? <GoogleAuth user={user} setUser={setUser}/>
                        : <Navigate to={"/profile"} replace/>
                }
            </div>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </AppContainer>
    );
};

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const TitleContainer = styled.div`
    margin-bottom: 3rem;
`;

export default MainPage;
