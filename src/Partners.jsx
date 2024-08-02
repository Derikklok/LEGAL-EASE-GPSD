import './navcdd/Partner.css'
import image1 from './assets/image 1.png'
import image2 from './assets/image 2.png'
import image3 from './assets/image 3.png'
import image4 from './assets/image 4.png'
import image5 from './assets/image 5.png'
import image6 from './assets/image 6.png'
function Partner(){
    return(
        <div className='section1'>
            <div className='content'>
                <h1 className='headingPartner1'>Trusted by companies all around the <br />
                globe</h1>
                <button className='viewCompaniesbtn'>View Companies</button>
                <div className='imageSecation2'>
                    <ul>
                        <li><img src={image1} alt="" /></li>
                        <li><img src={image2} alt="" /></li>
                        <li><img src={image3} alt="" /></li>
                        <li><img src={image4} alt="" /></li>
                        <li><img src={image5} alt="" /></li>
                        <li><img src={image6} alt="" /></li>
                    </ul>
                </div>
                <br />
                <hr />
            </div>  
        </div>
    );
}
export default Partner