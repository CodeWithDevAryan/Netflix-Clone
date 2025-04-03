import {HomeNavigationBar} from "../Components/NavigationBar"
import MainScreen from "../Components/MainScreen"
import '../CSS/HomePage.css'
import bgImages from '../assets/header-image-bg.png'
import TrendingNow from "../Components/TrendingNow"
import ReasonsToJoin from "../Components/ReasonsToJoin"
import FrequentlyAskedQuestions from "../Components/FrequentlyAskedQuestions"
import {HomePageFooter,SignInPageFooter} from "../Components/Footer"
import MovieCard from "../Components/MovieCard"
import Movies from "../Javascript/MovieData"
import { useState,useEffect} from "react"
import OpenSelectedFrame from "../Components/OpenSelectedFrame"

function HomePage(){
    const [bgVisibiltyState,setBgVisibiltyState] = useState('none');
    const [SelectedID,setSelectedID] = useState(null);
    const [SelectedMovieComponentIMG,setSelectedMovieComponentIMG] = useState(null);
    const [SelectedMovieComponentCONTEXT,setSelectedMovieComponentCONTEXT] = useState(null);
    const [SelectedMovieComponentTHEME1,setSelectedMovieComponentTHEME1] = useState(null);
    const [SelectedMovieComponentTHEME2,setSelectedMovieComponentTHEME2] = useState(null);
    const [SelectedMovieComponentTHEME3,setSelectedMovieComponentTHEME3] = useState(null);
    const [SelectedMovieComponentRELEASE,setSelectedMovieComponentRELEASE] = useState(null);
    const [SelectedMovieComponentCATEGORY,setSelectedMovieComponentCATEGORY] = useState(null);
    const [SelectedMovieComponentTYPE,setSelectedMovieComponentTYPE] = useState(null);
    const [SelectedMovieComponentLOGO,setSelectedMovieComponentLOGO] = useState(null);
    const [SelectedMovieComponentNETFLIXTYPE,setSelectedMovieComponentNETFLIXTYPE] = useState(null);

    const changeview = () => {
        setBgVisibiltyState(bgVisibiltyState === 'block' ? 'none' : 'block')
    };

    const SelectedIndexValue = (ID) => {
        setSelectedID(ID);
    };
    
    // Get the Selected Movie Dictionary
    const selectedMovie = SelectedID !== null ? Movies[SelectedID] : null; 

    useEffect(() => {
        if (selectedMovie) {
            setSelectedMovieComponentIMG(selectedMovie.BigPoster);
            setSelectedMovieComponentCONTEXT(selectedMovie.Context);
            setSelectedMovieComponentTHEME1(selectedMovie.Theme_1);
            setSelectedMovieComponentTHEME2(selectedMovie.Theme_2);
            setSelectedMovieComponentTHEME3(selectedMovie.Theme_3);
            setSelectedMovieComponentRELEASE(selectedMovie.Release);
            setSelectedMovieComponentCATEGORY(selectedMovie.Category);
            setSelectedMovieComponentTYPE(selectedMovie.Type);
            setSelectedMovieComponentLOGO(selectedMovie.Logo);
            setSelectedMovieComponentNETFLIXTYPE(selectedMovie.NetflixType);
        } else {
            setSelectedMovieComponentIMG("No movie selected");
            setSelectedMovieComponentCONTEXT("No Context selected");
            setSelectedMovieComponentTHEME1(null);
            setSelectedMovieComponentTHEME2(null);
            setSelectedMovieComponentTHEME3(null);
            setSelectedMovieComponentRELEASE(null);
            setSelectedMovieComponentCATEGORY(null);
            setSelectedMovieComponentTYPE(null);
            setSelectedMovieComponentLOGO(null);
            setSelectedMovieComponentNETFLIXTYPE(null);
        }
    }, [SelectedID]);


    return (
    <section className="HomePage" 
            style={{
                backgroundImage: `
                linear-gradient(to bottom, 
                rgba(0, 0, 0, 0.95)2%, 
                rgba(99, 74, 88, 0.908)6%,
                rgba(43, 32, 38, 0.808)10%,
                rgba(20,20,20, 0.9)50%,
                rgba(0,0,0,1)110%
                ),url(${bgImages})`, 
                backgroundSize: "cover",
                backgroundAttachment: 'local',
                height:'2150px',
                backgroundPosition: "center",
                zIndex: '30',
                overflow: bgVisibiltyState === 'block' && 'none',
                userSelect: 'none',
            }}>

            <section>
            <div
                className="FrameOpened-Black-Background"
                style={{ display: bgVisibiltyState }}
            ></div>

                <HomeNavigationBar />
                <MainScreen />
                <TrendingNow ToggleBGVisibility={changeview} SelectedIndexVal={SelectedIndexValue}/>
                <OpenSelectedFrame 
                    BigImagePoster={SelectedMovieComponentIMG} 
                    ContextTxt={SelectedMovieComponentCONTEXT} 
                    containervisible={bgVisibiltyState} 
                    CloseDarkBG={changeview}
                    Theme_1Txt={SelectedMovieComponentTHEME1}
                    Theme_2Txt={SelectedMovieComponentTHEME2}
                    Theme_3Txt={SelectedMovieComponentTHEME3}
                    ReleaseTxt={SelectedMovieComponentRELEASE}
                    CategoryTxt={SelectedMovieComponentCATEGORY}
                    TypeTxt={SelectedMovieComponentTYPE}
                    Logo={SelectedMovieComponentLOGO}
                    NetflixType={SelectedMovieComponentNETFLIXTYPE}
                />
                <ReasonsToJoin />
                <FrequentlyAskedQuestions />
                <HomePageFooter />
            </section>
    </section>
    );
}

export default HomePage;