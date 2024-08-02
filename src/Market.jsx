import './navcdd/market.css'
import workingAmico from './assets/Working remotely-amico 1.png'

function Market(){
    return(
        <div>
            <h1 className="hd1">The Most Trusted Platform Empowering Growth and <br />
            Efficiency in Law Workflow Management</h1>
            <h2 className='hd2'>Who we are</h2>

            
            <div className='imgCard'>
                <div className='imgDescription'>
                    <h2>Cutting-Edge Cloud Solutions Designed <br /> 
                    for Legal Professionals</h2>
                    <p>As pioneers in legal technology solutions, we empower firms of <br />every scale and specialization to optimize operations, revolutionizing <br />document & workflow management within the legal sphere.</p>
                    <button className='btn4'>Get started with clod DMS</button>
                </div>
                <img className='imgtag' src={workingAmico} alt="workingPeepsImg" />               
            </div>
        </div>
    );
}
export default Market;