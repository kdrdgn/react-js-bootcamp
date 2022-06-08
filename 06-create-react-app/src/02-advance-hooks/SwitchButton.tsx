import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const SwitchButton = () => {
    const theme = useContext(ThemeContext)

    const darkMode = theme.state.darkMode;

    const handleOnClick = () => {
        if(darkMode) {
            theme.dispatch({type: "LIGHT"});
        }else {
            theme.dispatch({type: "DARK"});
        }
    }

    return (
        <button onClick={handleOnClick} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
    )
}

export default SwitchButton;