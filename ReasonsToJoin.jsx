import '../CSS/ReasonsToJoin.css';
import ReasonsToJoinCards from './ReasonsToJoinCards';


function ReasonsToJoin(){
    return(
        <section className="ReasonsToJoin-container">
            <div className='Cover-ReasonsToJoin'>
                <h3 className='Title-ReasonsToJoin'>More reasons to join</h3>
                
                <section className="ReasonsToJoinCards-container">
                    <ReasonsToJoinCards Text='Cancel or switch plans anytime' Icon='Handshake'/>
                    <ReasonsToJoinCards Text='A safe place just for kids' Icon='Heart'/>
                    <ReasonsToJoinCards Text='Watch on your favourite devices' Icon='Monitor'/>
                    <ReasonsToJoinCards Text='Stories tailored to your taste' Icon='StarAndHand'/>
                </section>
            </div>
        </section>
    )
}

export default ReasonsToJoin