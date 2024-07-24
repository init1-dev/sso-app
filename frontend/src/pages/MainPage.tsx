import { Navigate } from "react-router-dom";
import styled from "styled-components";
import reactLogo from '../assets/react.svg'
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
            </div>

            <div>
                <h1>SSO Auth with Google (React + Node.js)</h1>

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

export default MainPage;
