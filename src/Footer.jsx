import line1 from './assets/Line 1.png';
import './navcdd/Footer.css'
import FooterCard from './FooterCard.jsx'

function Footer() {
    return (
        <footer className="container">
            <div className='container-align'>
                <img src={line1} alt="Vertical Line" />
                <h2 className='element-h2'>News</h2>
            </div>
            <br />
            <FooterCard/>
        </footer>
    );
}

export default Footer;
