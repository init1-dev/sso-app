import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'

function App() {
    const loginWithGoogle = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    };

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>React & Node.js SSO Auth with Google</h1>

            <GoogleButton onClick={loginWithGoogle}>Login with Google</GoogleButton>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

const GoogleButton = styled.button`

`;

export default App
