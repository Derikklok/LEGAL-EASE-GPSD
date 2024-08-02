import bubbleImage from './assets/imgAndBubble.png'
import './navcdd/FooterCard.css'
function FooterCard(){
    return(
        <section className='cardSec1'>
            <div className='cardSec2'>
             <h2>Legal Ease Events</h2>
             <h1 className='largeHead'>Join with us in the event</h1>
             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
             doloremque laudantium, totam rem aperiam.</p>
              <button className='footerbtn'>Register Now</button>
           </div>
           <div><img className='bubbly' src={bubbleImage} alt="" /></div>
        </section>
        
       
    );
}

export default FooterCard