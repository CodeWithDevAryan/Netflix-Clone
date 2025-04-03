import '../CSS/SignInPage.css'
import { SignInNavigationBar } from '../Components/NavigationBar'
import BgImage from '../assets/header-image.png'
import {SignInPageFooter} from "../Components/Footer"


const InputBoxes = ({Text,Type}) =>{
    return(
        <>
            <div className="SignInPage-Main-Box-Container-ContentBox-SignIn-Email">
                <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-Email-div'>
                    <input
                        type={Type}
                        required
                    />
                    <label>
                        {Text}
                    </label>
                </div>
            </div>
        </>
    )
}


function SignIn(){
    return (
        <>
            <section className='SignInPage'>
                <img src={BgImage} alt="#" />      

                <div className='SignInPage-NavigationBar'>
                    <span className='Span-SignInPage-Container'>
                        <SignInNavigationBar />
                    </span>
                </div>     

                <div className='SignInPage-Main-Box-Container'>
                    <div className='SignInPage-Main-Box-Container-ContentBox'>
                        <div className='SignInPage-Main-Box-Container-ContentBox-Inside'>
                            <span className='SignInPage-Main-Box-Container-ContentBox-SignIn-Txt'>Sign In</span>
                            <InputBoxes Text='Email or mobile number' Type='text'/>
                            <div style={{marginTop: '35px'}}>
                                <InputBoxes Text='Password' Type='password'/>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-Btn-Div'>
                                <button className='SignInPage-Main-Box-Container-ContentBox-SignIn-Btn'>Sign In</button>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-OR-Div'>
                                <span className='SignInPage-Main-Box-Container-ContentBox-SignIn-OR'>OR</span>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-Code-Btn-Div'>
                                <button className='SignInPage-Main-Box-Container-ContentBox-SignIn-Code-Btn'>Use a sign-in code</button>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-ForgotPassword'>
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-RememberMe-CheckBox'>
                                <div><input type="checkbox" className='SignInPage-Main-Box-Container-ContentBox-SignIn-RememberMe-CheckBox-span' /></div>
                                <div><span className='SignInPage-Main-Box-Container-ContentBox-SignIn-RememberMe-Txt'>Remember me</span></div>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-NewToNetflix'>
                                <span className='SignInPage-Main-Box-Container-ContentBox-SignIn-NewToNetflix-Txt'>New to Netflix?</span>
                                <a href="#">Sign up now.</a>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-Safety-warning'>
                                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                            </div>
                            <div className='SignInPage-Main-Box-Container-ContentBox-SignIn-Learn-More'>
                                <a href="#">Learn more.</a>
                            </div>
                        </div>
                    </div>    
                </div>   
                <div className='SignInPage-Footer'>
                    <SignInPageFooter />
                </div>  
            </section>
        </>
    )
}

export default SignIn