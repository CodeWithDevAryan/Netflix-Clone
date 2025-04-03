import '../CSS/OpenSelectedFrame.css'
import { useState, useEffect } from 'react'
import { SignIn_Box, SignIn } from './SignIn';


function OpenSelectedFrame({
        BigImagePoster, 
        containervisible,
        CloseDarkBG,
        ContextTxt,
        Theme_1Txt,
        Theme_2Txt,
        Theme_3Txt,
        ReleaseTxt,
        CategoryTxt,
        TypeTxt,
        Logo,
        NetflixType,
    }) {


    const [convis, setConvis] = useState(containervisible);

    useEffect(() => {
        setConvis(containervisible); // Sync state with prop changes
    }, [containervisible]);

    const handleClose = () => {
        setConvis('none');
        CloseDarkBG();
    };

    return (
        <>
            <section 
                className='Container-OpenBigFrame' 
                style={{ display: convis === 'block' ? 'block' : 'none' }}
            >
                <div className="OpenBigFrame">
                    <div className='Div-img-BigPoster' >
                        <img src={BigImagePoster} alt="" />
                        <button className='CloseContainerBigFrame' onClick={handleClose}>
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                    </div>

                    <div className='BigPoster-NetflixType'>
                        <img src={NetflixType} alt="" />
                    </div>

                    <div className='BigPoster-MovieLogo'>
                        <img className='BigPoster-MovieLogo-img' src={Logo} alt="" />
                    </div>

                    <div className='Details-Movie'>
                        <ul>
                            <li>{ReleaseTxt}</li>
                            <li>{CategoryTxt}</li>
                            <li>{TypeTxt}</li>
                            {Theme_1Txt != null && <li>{Theme_1Txt}</li>}
                            {Theme_2Txt != null && <li>{Theme_2Txt}</li>}
                            {Theme_3Txt != null && <li>{Theme_3Txt}</li>}
                        </ul>
                    </div>

                    <div className='Div-Details-BigPoster'>
                        <div className='div-span-BigPosterCONTEXT'><span className='span-BigposterContext'>{ContextTxt}</span></div>
                        <div className='Signin-BigPoster'>
                            <SignIn_Box />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OpenSelectedFrame;
