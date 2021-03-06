import React from 'react';
import { gsap } from 'gsap'

//Components
import Navbar from './Navbar';

const Signin = () => {

    gsap.fromTo('div .card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, });

    return (
        <>
            <Navbar />

            <div className="card-wrapper">
                <h1>The Squad</h1>
            </div>

            <div className="intro-wrapper">
                <div className='row'>
                    <div className='col m6 l3'>
                        <div className="card z-depth-0 blue-grey lighten-5">
                            <img className="bio-images" src="/images/Aliyah.jpg" alt="" />
                            <h3>Aliyah</h3>
                            <a className='squadLinks' href="https://aliyahgamble.netlify.app/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Portfolio</button></a>
                            <a className='squadLinks' href="https://github.com/AGamble7" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Github</button></a>
                            <a className='squadLinks' href="https://www.linkedin.com/in/aliyah-gamble-a87839173/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">LinkedIn</button></a>
                            <p className="bio"><strong>Aliyah Gamble</strong> is a junior developer based in the Atlanta area. She is passionate about her career in technology, her focus on continuing her education, and how she can comprise her abilities and her passions.  Although her career has just begun, Aliyah is a junior developer working towards being a Cyber Security professional.</p>
                        </div>
                    </div>
                    <div className='col m6 l3'>
                        <div className="card z-depth-0 blue-grey lighten-5">
                            <img className="bio-images" src="/images/luke.jpg" alt="" />
                            <h3>Luke</h3>
                            <a className='squadLinks' href="https://www.lukebrazil.com/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Portfolio</button></a>
                            <a className='squadLinks' href="https://github.com/LukeBrazil" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Github</button></a>
                            <a className='squadLinks' href="https://www.linkedin.com/in/luke-brazil-0506b71b0/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">LinkedIn</button></a>
                            <p className="bio"><strong>Luke Brazil</strong> is a junior developer based in the Houston area. He enjoys learning new aspects of programming languages and implementing them into new projects. His hobbies include disc golf, eating chinese food, and reading.</p>
                        </div>
                    </div>
                    <div className='col m6 l3'>
                        <div className="card z-depth-0 blue-grey lighten-5">
                            <img className="bio-images" src="/images/shaiah.jpg" alt="" />
                            <h3>Shaiah</h3>
                            <a className='squadLinks' href="https://shaiahwren.com/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Portfolio</button></a>
                            <a className='squadLinks' href="https://github.com/ShaiahWren" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Github</button></a>
                            <a className='squadLinks' href="https://www.linkedin.com/in/shaiah-emigh-doyle/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">LinkedIn</button></a>
                            <p className="bio"><strong>Shaiah Emigh-doyle</strong> is a junior developer based in the NYC area dedicated to producing software and excellent user experience. They love learning new languages, both natural and computer, and are passionate about how technology can be leveraged to an educational and humanitarian end.</p>
                        </div>
                    </div>
                    <div className='col m6 l3'>
                        <div className="card z-depth-0 blue-grey lighten-5">
                            <img className="bio-images" src="/images/tait.JPG" alt="" />
                            <h3>Tait</h3>
                            <a className='squadLinks' href="https://jtloughridge.com/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Portfolio</button></a>
                            <a className='squadLinks' href="https://github.com/TaitLoughridge" target="_blank"><button className="squadLinks btn-small light-blue darken-2">Github</button></a>
                            <a className='squadLinks' href="https://www.linkedin.com/in/tait-loughridge/" target="_blank"><button className="squadLinks btn-small light-blue darken-2">LinkedIn</button></a>
                            <p className="bio"><strong>Tait Loughridge</strong> is a junior developer based in the Houston area. He relies on his background in art and eye for effective design. In his free time, he enjoys gaming, time with family, and creating sculptures in clay.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a href="https://github.com/ShaiahWren/Study-App" target="_blank"><span className="fab style2 major fa-github" style={{ padding: '12px', fontSize: '35px' }}></span></a>
            </div>
        </>
    )
};

export default Signin;
