import '../CSS/Language_Selection.css'

function Langugae_selection(){
    return(
        <>
            <div className="Navigation-Bar-Language">
                <select name="LanguageChange">
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी</option>
                </select>
                <i className="material-icons">translate</i>
                <i className="fa-solid fa-caret-down"></i>
            </div>
        </>
    )
}

export default Langugae_selection

