import '../CSS/FAQ_Cards.css'
import { useState } from 'react'

function FAQ_Cards(){

    const FAQ_Data = [
        { Question: "What is Netflix?", Answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
        { Question: "How much does Netflix cost?", Answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee." },
        { Question: "Where can I watch?", Answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device." },
        { Question: "How do I cancel?", Answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks." },
        { Question: "What can I watch on Netflix?", Answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more." },
        { Question: "Is Netflix good for kids?", Answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies." },
    ];

    const [isOpen,setIsOpen] = useState(null);

    return(
        <>
            {FAQ_Data.map((Data, index) => (
                <section className='FAQ' key={index}>
                    <div className="div-FAQ-Cards-Question" onClick={()=> setIsOpen(isOpen === index ? null:index)}>
                        <h3 className='FAQ-Cards-Question'>{Data.Question}</h3>
                        <i className={`fa-solid ${isOpen == index ? 'fa-xmark' : 'fa-plus'} FAQ-Plus-Cross`}></i>
                    </div>
                    {isOpen == index && (<div className="FAQ-Cards-Answer">
                        {Data.Answer}
                    </div>)}
                </section>
            ))}
        </>
    )
}

export default FAQ_Cards