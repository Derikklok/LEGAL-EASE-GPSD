import people from "./assets/people.png"
import './navcdd/DuvlCards.css'
function DuvlCards(){
    return(
            <div className="flashCard1">
                <img className="imgflush" src={people} alt="" />
                <h2>Partner Ecosystem</h2>
                <hr className="hrline1" />
                <p className="para1">Sed ut perspiciatis unde omnis iste  natus error  <br />sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam</p>
                <button className="btn5">Get Started</button>
            </div>
    );
}

export default DuvlCards