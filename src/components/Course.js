import React from 'react'
import '../index.css';
// import '../src/assets/css/blobz.min.css';
import 'animate.css';
import { useNavigate } from 'react-router-dom'


// import './components/script'
export default function Course() {
  // setInterval(() => {
  // }, 100);
  setTimeout(() => {

    const ANIMATE_CLASS_NAME1 = 'animate__animated';
    const ANIMATE_CLASS_NAME2 = 'animate__slideInUp';

    const animate = (element) => {
      element.classList.add(ANIMATE_CLASS_NAME1)
      element.classList.add(ANIMATE_CLASS_NAME2)
    };

    const isAnimated = (element) => {
      element.classList.contains(ANIMATE_CLASS_NAME1)
      element.classList.contains(ANIMATE_CLASS_NAME2)
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {

        // when element's is in viewport,
        // animate it!
        if (entry.intersectionRatio > 0) {
          animate(entry.target);
          // remove observer after animation
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll('.courseBoxes');
    console.log(elements);

    // start observing your elements
    elements.forEach((element) => intersectionObserver.observe(element));
  }, 1000);

  const navigate = useNavigate();
  function navigateToIntership() {
    console.log('hi');
    navigate('Intership');
  }
  function navigateToNotes() {
    console.log('hi');
    navigate('Notes');
  }
  function navigateToTraining() {
    console.log('hi');
    navigate('Training');
  }
  function navigateToCourses() {
    console.log('hi');
    navigate('courses');
  }
  function navigateToCompany(){
    navigate('/Intership/company')
  }


  return (
    <div className='course border border-white ' >
      <p className='' id='whatWeOffer'>What we offer</p>
      <div className='text-sm w-3/4  m-auto'>Prof.eX is a free online D2C platform that helps students by providing online and offline internships, customised offline training and courses under start-ups and reknown companies for free.
        It works as a support system that gives wholesome experience of professionalism, solves queries customize timing of offline training and internships that too fixed stipend based under zero registration fee!
        New and practical courses differing from regular tutorials will guide you for the future and help in career for the path of professional excellence.
        </div>
      <div className='secGrid grid grid-cols-3 m-2'>

        <div className='border border-black m-4 cursor-pointer p-2' id='courseBoxes1' onClick={navigateToIntership}>
          <img src="" alt="" />
          <p className='mb-2 text-2xl'>SkillONN</p>
          <p className='text-sm'>Tired of paying fee to professors and fake training websites? Aspiring for customised offline training?
            Prof.eX conducts training program under which students can connect with professionals that too under customised timing for offline work experience as per your academic calender.
            What are you waiting for? Have a hands on easy connect with us for the path of professional excellence</p>
        </div>
        <div className='border border-black m-4 cursor-pointer p-2' id='courseBoxes1' onClick={navigateToCompany}>
          <img src="" alt="" />
          <p className='mb-2 text-2xl'>Professional launchpad </p>
          <p className='text-sm'>Having trouble getting stipend-based internship? Annoyed with fake intern promises? Here’s a solution.
            Prof.eX provides online and offline fixed stipend-based internships that too under zero registration fee under professionals for a wholesome work experience for the path of the professional excellence.</p>
        </div>
        <div className='border border-black m-4 cursor-pointer p-2' id='courseBoxes1' onClick={navigateToCompany}>
          <img src="" alt="" />
          <p className='mb-2 text-2xl'>Learning Simulation</p>
          <p className='text-sm'>Annoyed with boring and expensive courses that results in vain? Here comes a solution.
            Prof.eX regularize and address all your issues for online and offline courses and provides you a platform that gives you different career courses opportunities for that is different from regular tutorials.
So, don’t miss out. Grab the opportunity for the path of the professional excellence.</p>
        </div>
        {/* <div className='border border-black m-4 cursor-pointer' id='courseBoxes1' onClick={navigateToNotes}>
          <img src="" alt="" />
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
        </div> */}
      </div>
    </div>
  )

}
