import { useState } from "react";
import '../CSS/MainScreen.css'
import bgImage from '../assets/header-image.png'
import { SignIn_Box, SignIn } from './SignIn';


function MainScreen(){
    
    return(
        <div className='div-MainScreen'>
            <div className="MainScreen">
                <div className="Cover-MainScreen" style={{backgroundImage: `url(${bgImage})`}}>
                    <div className='Cover-MainScreen-Content'>


                        <div className='Cover-MainScreen-Line'>
                            <span className='span-Cover-MainScreen-Line'>Unlimited movies, TV shows and more</span>
                        </div>


                        <div className='Cover-MainScreen-ShowPrice'>
                            <span className='span-Cover-MainScreen-ShowPrice'>Starts at ₹149. Cancel at any time.</span>
                        </div>


                        <SignIn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen