import { Dispatch, SetStateAction } from "react";
import { User } from "../interfaces/interfaces";
import { removeUserFromLocalStorage, saveToLocalStorage } from "./functionsModule";
import { CredentialResponse } from "@react-oauth/google";
import toast from "react-hot-toast";

export const handleLoginSuccess = async (
    credentialResponse: CredentialResponse, 
    clientId: string,
    setUser: Dispatch<SetStateAction<User | null>>
) => {
    try {
        const { credential } = credentialResponse;

        const response = await fetch('http://localhost:5000/google-auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                credential,
                client_id: clientId
            }),
        });

        const data = await response.json();
        toast.success(`Welcome, ${data.name}`);
        saveToLocalStorage('user', data);
        setUser(data);
    } catch (error) {
        console.error('Error during Google login:', error);
    }
};

export const handleLogoutSuccess = async (setUser: Dispatch<SetStateAction<User | null>>) => {
    try {
        const response = await fetch('http://localhost:5000/logout', {
            method: 'POST',
        });

        const data = await response.json();

        if(response.ok){
            toast.success(`${data.message}`);
            setUser(null);
            removeUserFromLocalStorage('user');
        }
        
    } catch (error) {
        console.error('Error during logout:', error);
    }
};