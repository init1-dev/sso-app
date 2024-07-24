import { User } from "../interfaces/interfaces";

export const saveToLocalStorage = (itemName: string, value: User) => {
    localStorage.setItem(itemName, JSON.stringify(value));
};

export const removeUserFromLocalStorage = (itemName: string) => {
    localStorage.removeItem(itemName);
}