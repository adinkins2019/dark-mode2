import useLocalStorage from './useLocalStorage'
import {useEffect} from 'react'

const useDarkMode = (props) => {
    const [darkMode, setdarkMode] = useLocalStorage(props.isDarkMode)

    useEffect(() => {
        //if DarkMode is turned on, then add dark-mode class to body element
        //if darkMode is turned off, then remove class from body element
        if (darkMode){

        }
        else {

        };
    })

    return[darkMode, setDarkMode]
}

export default useDarkMode;