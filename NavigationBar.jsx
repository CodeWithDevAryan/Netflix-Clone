import logo from "../assets/logo.png";
import languageicon from "../assets/Language_Icon.png";
import '../CSS/NavigationBar.css'
import {Link} from 'react-router-dom'
import Langugae_selection from "./Language_Selection";

function HomeNavigationBar(){
    return (
        <nav className="Main-Navigation">
            <nav className="Navigation-Bar">
                <div className="Navigation-Bar-Logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="Navigation-Bar-Tabs">
                    <Langugae_selection />
                    <div className="Navigation-Bar-SignIn">
                        <Link to='/signin'>
                            <button className="Navigation-Bar-SignIn-Btn">Sign In</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </nav>
    )
}

function SignInNavigationBar(){
    return (
        <nav className="Main-Navigation">
            <nav className="Navigation-Bar">
                <div className="Navigation-Bar-Logo">
                    <img src={logo} alt="Logo" />
                </div>
            </nav>
        </nav>
    )
}

export {HomeNavigationBar,SignInNavigationBar}