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


  return (
    <div className='course border border-white ' >
      <p className='' id='whatWeOffer'>What we offer</p>
      <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maiores!</span>
      <div className='secGrid grid grid-cols-3 m-2'>

                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1' onClick={navigateToIntership}>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1' onClick={navigateToCourses}>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1' onClick={navigateToTraining}>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                    <div className='border border-black m-4 cursor-pointer' id='courseBoxes1' onClick={navigateToNotes}>
                        <img src="" alt="" />
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure aut corrupti natus, quas facere amet deserunt? Accusantium expedita voluptatum tempore optio a iure.</p>
                    </div>
                </div>
    </div>
  )

}
