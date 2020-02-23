import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react'

const useDarkMode = (props) => {
    const [darkMode, setdarkMode] = useLocalStorage(props.isDarkMode)

    useEffect(() => {
        //if DarkMode is turned on, then add dark-mode class to body element
        //if darkMode is turned off, then remove class from body element
        if (darkMode){
            document.querySelector("body").classList.add("dark-mode");
        }
        else {
            document.querySelector("body").classList.remove("dark-mode");
        };
    })

    return[darkMode, setDarkMode]
}

export default useDarkMode;