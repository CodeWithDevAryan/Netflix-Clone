import '../CSS/ReasonsToJoinCards.css';
import ReasonsToJoinCards_Icons from './ReasonToJoinCards_Icons';

function ReasonsToJoinCards({Text,Icon}){
    return(
        <>
            <section className="ReasonsToJoinCard-Cover">
                <h3 className='ReasonsToJoinCard-Text'>
                    {Text}
                </h3>
                <div className='div-ReasonsToJoinCards-Icon'>
                    <ReasonsToJoinCards_Icons SelectedIcon={Icon} />
                </div>
            </section>
        </>
    )
}

export default ReasonsToJoinCards