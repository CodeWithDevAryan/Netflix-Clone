import { useState } from "react";

function SignIn(){

    const [email, setEmail] = useState("");

    return(
        <>
            <div className='div-Cover-MainScreen-Email-ID-Text'>
                <span className='span-Cover-MainScreen-Email-ID-Text'>Ready to watch? Enter your email to create or restart your membership.</span>
            </div>

            <div className="div-Cover-MainScreen-Content-EmailId">
                <div className="input-container">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className={email ? "active" : ""}>
                        Email address
                    </label>
                </div>
                <div className="div-Cover-MainScreen-Content-Email-ID-Btn">
                    <button className="Cover-MainScreen-Content-Email-ID-Btn">
                        Get Started
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}


function SignIn_Box(){

    const [email, setEmail] = useState("");

    return(
        <>
            
            <div className="div-Cover-MainScreen-Content-EmailId">
                <div className="input-container">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email" className={email ? "active" : ""}>
                        Email address
                    </label>
                </div>
                <div className="div-Cover-MainScreen-Content-Email-ID-Btn">
                    <button className="Cover-MainScreen-Content-Email-ID-Btn">
                        Get Started
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export {SignIn_Box,SignIn}