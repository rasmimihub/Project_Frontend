import '../styles/Home.css';
import background from '../assets/images/background.jpg';
function Home () {
    return (
        <div className='home-container'>
            <h1 className='home-heading'>Welcome to my website.</h1>  
           <h2> Shop with zero (0) Effort.</h2>
            <img src={background} alt='background' />
        </div>

    );
}

export default Home;