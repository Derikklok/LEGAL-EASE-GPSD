import mainLogo from './assets/LEGALEASELOGO.svg'
import './navcdd/NAv.css'
function NavigationBar(){
    return(
        <div>
            
            <ul className="navbar">
                <li><img src={mainLogo} alt="" /></li>
                <li className='pageLinks'><a href=""><button className='btn_signin'>Sign up</button></a></li>
                <li className='pageLinks'><a href="">Explore</a></li>
                <li className='pageLinks'><a href="">Support</a></li>
                <li className='pageLinks'><a href="">Pricing</a></li>
                <li className='pageLinks'><a href="">Services</a></li>
                <li className='pageLinks'><a href="">Home</a></li>  
            </ul>
            
        </div>
            
       
    );
}

export default NavigationBar;
