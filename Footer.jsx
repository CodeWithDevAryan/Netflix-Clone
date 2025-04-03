import '../CSS/Footer.css'
import {HomePage_Footer_Options,SignInPage_Footer_Options} from './Footer_Options'
import Langugae_selection from './Language_Selection'
import { SignIn_Box, SignIn } from './SignIn';

function HomePageFooter(){
    return(
        <>
            <section className='Netflix-Footer'>
                <div className='Cover-Netflix-Cover'>
                    <SignIn />
                </div>
                <section className='Help-section'>
                    <div className='Help-Section-Options'>
                        <span className='Call-Text'>Questions? Call
                            <a className='Number-Link' href="https://youtube.com">000-800-919-1743</a>
                        </span>
                        <section className='Help-section-Options'>
                            <HomePage_Footer_Options />
                        </section>
                    </div>
                    <div className='Language-Selection'>
                        <Langugae_selection />
                    </div>
                    <span className='NetFlix-India'>Netflix India</span>
                </section>
            </section>
        </>
    )
}
function SignInPageFooter(){
    return(
        <>
            <section className='Help-section-SignIn'>
                <div className='Help-Section-Options'>
                    <span className='Call-Text'>Questions? Call
                        <a className='Number-Link' href="https://youtube.com">000-800-919-1743</a>
                    </span>
                    <section className='Help-section-Options'>
                        <SignInPage_Footer_Options />
                    </section>
                    <Langugae_selection />
                </div>
            </section>
        </>
    )
}

export {HomePageFooter,SignInPageFooter}