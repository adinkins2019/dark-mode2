import React, {useState} from 'react'

const useLocalStorage = (event, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //Get item from localstorage
        const item = window.localStorage.getItem(key);
        // Parse and return JSON version of item if item exists
        // If item doesn't exist, return initialValue
        return item ? JSON.parse(item)    : initialValue;
    });

    const setValue = value => {
        //save value to state
        setStoredValue(value);
        //Save value to localStorage
        //windows.localStorage.setItem(key, value) - setItem takes a key-value pair as arguments
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue];
}

export default useLocalStorage;