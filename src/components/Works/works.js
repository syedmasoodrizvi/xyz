import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/resize-16963109151828396385tictactoejavascript.png';
import Portfolio2 from '../../assets/resize-16963133981066283616ezyecommercewebsitetemplate.jpg';
import Portfolio3 from '../../assets/resize-1696313561779769573VWLandingPage.jpg';
import Portfolio4 from '../../assets/resize-1696317570275287479unnamed.png';
import Portfolio5 from '../../assets/resize-1696319029354424051pZZLJZRebdLIHa6BBwoaw.jpg';
import Portfolio6 from '../../assets/resize-16963200171429403639PasswordGenerator550x518.png';

const Works = () => {
    return (
    <section id="works">
        <h2 className='worksTitle'>My Projects</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and make sure that
        my work is pixel perfect.  I am excited to bring my skills and experience to help business achieve their goals 
        and create a strong online presence.</span>
       <div className='worksImgs'>
            <img src={Portfolio1} alt='Portfolio1' className='worksImg0'/><h2 className='Tic'>Tic Tac Toe Game</h2><button className='ticbutton'>See Details</button>
            <img src={Portfolio2} alt='Portfolio1' className='worksImg'/><h2 className='Tic'>Eccomerce Website</h2><button className='Eccbutton'>See Details</button>
            <img src={Portfolio3} alt='Portfolio1' className='worksImg1'/><h2 className='Land'>Landing Page</h2><button className='Landbutton'>See Details</button>
            <section className='worksImgs'>
            <img src={Portfolio4} alt='Portfolio1' className='worksImg2'/><h2 className='Quiz'>Quiz App</h2><button className='Quizbutton'>See Details</button>
            <img src={Portfolio5} alt='Portfolio1' className='worksImg3'/><h2 className='Calc'>Calculator</h2><button className='Calcbutton'>See Details</button>
            <img src={Portfolio6} alt='Portfolio1' className='worksImg4'/><h2 className='Pass'>Password Generator</h2><button className='Passbutton'>See Details</button>
            </section>
        </div>
        <button className='workBtn'>See More</button>
    </section>
    )
}

export default Works;