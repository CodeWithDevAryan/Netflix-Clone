import { useState } from 'react'
import '../CSS/Footer_Options.css'
import { HomePageOptions,SignInPageOptions } from '../Javascript/FooterOptions'

function HomePage_Footer_Options(){


    return(


        <>

            {HomePageOptions.map((SequenceOption, index) =>(
                <div className="Help-Option" key={index}>
                    <a className='Help-Link' href='#'>{SequenceOption}</a>
                </div>
            ))}

        </>
    )
}
function SignInPage_Footer_Options(){


    return(


        <>

            {SignInPageOptions.map((SequenceOption, index) =>(
                <div className="Help-Option" key={index}>
                    <a className='Help-Link' href='#'>{SequenceOption}</a>
                </div>
            ))}

        </>
    )
}
export {HomePage_Footer_Options,SignInPage_Footer_Options}