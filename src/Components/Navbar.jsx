import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
const Navbar = () => {

    const {theme, toggleTheme} = useTheme();
    return(
        <nav className={`flex items-center justify-between p-4 ${theme === "light" ? "bg-gray-200" : "bg-gray-800"} text-${theme === "light" ? "black" : "white"}`}>
            <h1>Kanban Pro</h1>
            <button onClick={toggleTheme}>Mode: {theme}</button>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
};
export default Navbar;