import '../CSS/FrequentlyAskedQuestions.css'
import FAQ_Cards from './FAQ_Cards'

function FrequentlyAskedQuestions(){
    return(
        <>
        <section className="FrequentlyAskedQuestions-Container">
            <div className='FrequentlyAskedQuestions-Cover'>
                <h3 className='Title-FrequentlyAskedQuestions'>Frequently Asked Questions</h3>

                <section className="FAQ-Cards-Container">
                    <div>
                        <FAQ_Cards />
                    </div>
                    
                    
                </section>
            </div>
        </section>
        </>
    )
}

export default FrequentlyAskedQuestions